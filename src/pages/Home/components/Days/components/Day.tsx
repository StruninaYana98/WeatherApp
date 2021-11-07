import React from 'react';
import { GlobalSvgSelector } from '../../../../../assets/svg/GlobalSvgSelector';
import s from "./Day.module.scss";

interface Props {
    day: string;
    data:string
    logo:{
        scope:string;
        name:string;
    },
    dayTemperature:string;
    nightTemperature:string;
    weather:string;
}

export const Day = ({day, data, logo, dayTemperature, nightTemperature,weather}: Props) => {
    return (
        <div className={s.dayWrapper}>
            <p className={s.day}>{day}</p>
            <p className = {s.data}>{data}</p>
            <div className={s.logo}><GlobalSvgSelector scope={logo.scope} name={logo.name}/></div>
            <p className={s.dayTemperature}>{dayTemperature}</p>
            <p className={s.nightTemperature}>{nightTemperature}</p>
            <p className={s.weather}>{weather}</p>
        </div>
    )
}