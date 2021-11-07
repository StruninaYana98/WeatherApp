import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/svg/GlobalSvgSelector';
import { Day } from './components/Day';
import s from "./Days.module.scss";

interface Props {

}

export const Days = (props: Props) => {
    let days = [
        {
            day: "Сегодня",
            data:"28 авг",
            logo:{
                scope:"weather",
                name:"cloudy"
            },
            dayTemperature:"+18",
            nightTemperature:"+15",
            weather:"облачно"
        },
        {
            day: "Завтра",
            data:"29 авг",
            logo:{
                scope:"weather",
                name:"light-rain"
            },
            dayTemperature:"+15",
            nightTemperature:"+10",
            weather:"Небольшой дождь"
        },
        {
            day: "Завтра",
            data:"29 авг",
            logo:{
                scope:"weather",
                name:"rain"
            },
            dayTemperature:"+15",
            nightTemperature:"+10",
            weather:"Небольшой дождь"
        }, {
            day: "Завтра",
            data:"29 авг",
            logo:{
                scope:"",
                name:""
            },
            dayTemperature:"+15",
            nightTemperature:"+10",
            weather:"Небольшой дождь"
        }, {
            day: "Завтра",
            data:"29 авг",
            logo:{
                scope:"",
                name:""
            },
            dayTemperature:"+15",
            nightTemperature:"+10",
            weather:"Небольшой дождь"
        }, {
            day: "Завтра",
            data:"29 авг",
            logo:{
                scope:"",
                name:""
            },
            dayTemperature:"+15",
            nightTemperature:"+10",
            weather:"Небольшой дождь"
        }, {
            day: "Завтра",
            data:"29 авг",
            logo:{
                scope:"",
                name:""
            },
            dayTemperature:"+15",
            nightTemperature:"+10",
            weather:"Небольшой дождь"
        }
    ]
    return (
        <div className={s.daysWrapper}>
            {
                days.map((day)=>(
                    <Day {...day}/>
                ))
            }

        </div>
    )
}