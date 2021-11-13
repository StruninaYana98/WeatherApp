import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalSvgSelector } from '../../../../assets/svg/GlobalSvgSelector';
import { RootState } from '../../../../store/store';
import s from "./ThisDay.module.scss";

interface Props {

}

export const ThisDay = (props: Props) => {
    const { weather , isFetching} =  useSelector((state:RootState)=>state.currentWeatherReducer);
    const {location }=  useSelector((state:RootState)=>state.locationReducer);
    return (
        <div className={s.thisDayWrapper}>
            <div className={s.dayWrapper}>
                <div>
                    <p className={s.degrees}>{weather.temperature}</p>
                    <p className={s.day}>today</p>
                </div>
                <div className={s.icon}><GlobalSvgSelector scope="weather" name="day" /></div>
            </div>
            <div className={s.information}>
                <p>city: {location.city}</p>

            </div>
        </div>
    )
}