import React from 'react';
import { useSelector } from 'react-redux';
import { ErrorHandler } from '../../shared/ErrorHandler/ErrorHandler';
import { Loader } from '../../shared/Loader/Loader';
import { RootState } from '../../store/store';
import { Filters } from './components/Filters/Filters';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import s from "./Home.module.scss";

interface Props {

}

export const Home = (props: Props) => {

    const { isCurrentLocationFetching, currentLocationResponse } = useSelector((state: RootState) => state.locationReducer)
    const { isCurrentWeatherFetching, currentWeatherResponse } = useSelector((state: RootState) => state.currentWeatherReducer)


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
                                : <ErrorHandler message={currentWeatherResponse.message} />
                            : <Loader />
                        }
                        <Filters />
                    </div>
                    : <ErrorHandler message={currentLocationResponse.message} />
                : <Loader />
            }
        </div>
    )
}