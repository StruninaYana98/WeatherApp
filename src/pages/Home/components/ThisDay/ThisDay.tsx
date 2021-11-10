import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalSvgSelector } from '../../../../assets/svg/GlobalSvgSelector';
import { RootState } from '../../../../store/store';
import s from "./ThisDay.module.scss";

interface Props {

}

export const ThisDay = (props: Props) => {
    const { weather , isFetching} =  useSelector((state:RootState)=>state.currentWeatherReducer);
    return (
        <div className={s.thisDayWrapper}>
            <div className={s.dayWrapper}>
                <div>
                    <p className={s.degrees}>{weather.temperature}</p>
                    <p className={s.day}>сегодня</p>
                </div>
                <div className={s.icon}><GlobalSvgSelector scope="weather" name="day" /></div>
            </div>
            <div className={s.information}>
                <p>Время: 21:54</p>
                <p>Город: Санкт-Петербург</p>

            </div>
        </div>
    )
}