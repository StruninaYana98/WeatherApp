import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { GlobalSvgSelector } from '../../../../assets/svg/GlobalSvgSelector';
import { RootState } from '../../../../store/store';
import s from "./ThisDayInfo.module.scss";

interface Props {

}

export const ThisDayInfo = (props: Props) => {
    const {weather} = useSelector((state:RootState)=>state.currentWeatherReducer);
    let parameters = [
        {
            name: 'Temperature',
            logo: {
                scope: 'parameters',
                name: 'temperature',
            },
            description: weather.temperature + ", " + weather.temp_feels_like

        },
        {
            name: 'Pressure',
            logo: {
                scope: 'parameters',
                name: 'pressure',
            },
            description: weather.pressure

        },
        {
            name:"Humidity",
            logo:{
                scope: 'parameters',
                name: 'humidity',
            },
            description: weather.humidity
        },
        {
            name: 'Wind',
            logo: {
                scope: 'parameters',
                name: 'wind',
            },
            description: weather.wind.speed

        }


    ]
    return (
        <div className={s.dayInfoWrapper}>
            {
                parameters.map((parameter) => (
                    <div className={s.parameter}>
                        <div className={s.nameWrapper}>
                        <div className={s.logo}><GlobalSvgSelector scope={parameter.logo.scope} name={parameter.logo.name} /></div>
                        <p className={s.name}>{parameter.name}</p>
                        </div>
                        <p className={s.description}>{parameter.description}</p>
                    </div>
                ))
            }

        </div>
    )
}