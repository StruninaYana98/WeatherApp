import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ErrorHandler } from '../../shared/ErrorHandler/ErrorHandler';
import { Loader } from '../../shared/Loader/Loader';
import { RootState } from '../../store/store';
import { DetailedDayWeather } from './components/DetailedDayWeather';
import s from "./DetailedWeekForecast.module.scss";

interface Props {

}

export const DetailedWeekForecast = (props: Props) => {
    const { isWeekWeatherFetching, weekWeatherList, weekWeatherResponse } = useSelector((state: RootState) => state.weekWeatherReducer);
    return (
        <div className={s.componentWrapper}>
            <div className={s.backButton}><NavLink className="button-second" to="/">back</NavLink></div>
            {!isWeekWeatherFetching ?
            weekWeatherResponse.isSuccessful ?
            <div className={s.detailedWeekWrapper}>
                {
                    weekWeatherList.map((day) => (
                        <DetailedDayWeather day={day} />
                    ))
                }

            </div> : <ErrorHandler message={weekWeatherResponse.message}/>
            : <Loader/>
            }
        </div>
    )
}