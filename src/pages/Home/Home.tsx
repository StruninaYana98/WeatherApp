import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LocationApi } from '../../apis/LocationApi';
import { WeatherApi } from '../../apis/WeatherApi';
import { LocationService } from '../../services/LocationService';
import { WeatherService } from '../../services/WeatherService';
import { ErrorHandler } from '../../shared/ErrorHandler/ErrorHandler';
import { Loader } from '../../shared/Loader/Loader';
import { AppDispatch, RootState } from '../../store/store';
import { Filters } from './components/Filters/Filters';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import s from "./Home.module.scss";

interface Props {

}

export const Home = (props: Props) => {

    const dispatch = useDispatch<AppDispatch>();
    const { isCurrentLocationFetching, currentLocationResponse } = useSelector((state: RootState) => state.locationReducer)
    const { isCurrentWeatherFetching, currentWeatherResponse } = useSelector((state: RootState) => state.currentWeatherReducer)
    useEffect(() => {
        (async () => {

            let location = await dispatch(LocationService.getCurrentLocation());
            await dispatch(LocationService.getCountryCities(location.country));
            await dispatch(WeatherService.getCurrentWeather(location.coord));
            await dispatch(WeatherService.getWeekWeather(location.coord));
            await dispatch(WeatherService.getHourlyWeather(location.coord));

        })();
    }, [])

    return (
        <div className={s.home}>
            { !isCurrentLocationFetching ?
                currentLocationResponse.isSuccessful ?
                    <div>
                        {!isCurrentWeatherFetching ?
                            currentWeatherResponse.isSuccessful ?
                            <div className={s.currentDay}>
                                <ThisDay />
                                <ThisDayInfo />
                            </div> 
                            : <ErrorHandler message={currentWeatherResponse.message}/>
                        : <Loader /> 
                        }
                        <Filters />
                    </div>
                    : <ErrorHandler message={currentLocationResponse.message} />
                :  <Loader />
            }
        </div>
    )
}