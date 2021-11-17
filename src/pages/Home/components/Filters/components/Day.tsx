import React from 'react';
import { GlobalSvgSelector } from '../../../../../assets/svg/GlobalSvgSelector';
import { DayWeather } from '../../../../../types/Weather';
import s from "./Day.module.scss";

interface Props {
    day:DayWeather
}

export const Day = ({day}: Props) => {
    return (
        <div className={s.dayWrapper}>
            <p className={s.day}>{day.day}</p>
            <p className = {s.data}>{String(day.date)}</p>
            <div className={s.logo}><GlobalSvgSelector scope={day.logo.scope} name={day.logo.name}/></div>
            <p className={s.dayTemperature}>{day.day_temp}</p>
            <p className={s.nightTemperature}>{day.night_temp}</p>
            <p className={s.weather}>{day.description}</p>
        </div>
    )
}