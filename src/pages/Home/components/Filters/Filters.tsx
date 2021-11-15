import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalSvgSelector } from '../../../../assets/svg/GlobalSvgSelector';
import { RootState } from '../../../../store/store';
import { Day } from './components/Day';
import { HourlyWeatherComponent } from './components/HourlyWeatherComponent';
import s from "./Days.module.scss";

interface Props {

}

export const Filters = (props: Props) => {
    const {weekWeatherList} = useSelector((state:RootState)=>state.weekWeatherReducer);
    const { hourlyWeatherList } = useSelector((state:RootState)=>state.hourlyWeatherReducer)
    let days = [
        {
            day: "Сегодня",
            data: "28 авг",
            logo: {
                scope: "weather",
                name: "cloudy"
            },
            dayTemperature: "+18",
            nightTemperature: "+15",
            weather: "облачно"
        },
        {
            day: "Завтра",
            data: "29 авг",
            logo: {
                scope: "weather",
                name: "light-rain"
            },
            dayTemperature: "+15",
            nightTemperature: "+10",
            weather: "Небольшой дождь"
        },
        {
            day: "Завтра",
            data: "29 авг",
            logo: {
                scope: "weather",
                name: "rain"
            },
            dayTemperature: "+15",
            nightTemperature: "+10",
            weather: "Небольшой дождь"
        }, {
            day: "Завтра",
            data: "29 авг",
            logo: {
                scope: "",
                name: ""
            },
            dayTemperature: "+15",
            nightTemperature: "+10",
            weather: "Небольшой дождь"
        }, {
            day: "Завтра",
            data: "29 авг",
            logo: {
                scope: "",
                name: ""
            },
            dayTemperature: "+15",
            nightTemperature: "+10",
            weather: "Небольшой дождь"
        }, {
            day: "Завтра",
            data: "29 авг",
            logo: {
                scope: "",
                name: ""
            },
            dayTemperature: "+15",
            nightTemperature: "+10",
            weather: "Небольшой дождь"
        }, {
            day: "Завтра",
            data: "29 авг",
            logo: {
                scope: "",
                name: ""
            },
            dayTemperature: "+15",
            nightTemperature: "+10",
            weather: "Небольшой дождь"
        }
    ]
    return (
        <div className={s.componentWrapper}>
            <div className={s.filters}>
                <div className={s.periods}>
                    <button className="button-second">На неделю</button>
                    <button className="button-second">На месяц</button>
                    <button className="button-second">На 10 дней</button>
                </div>
                <button className={`${s.cancel} button-prime`}><GlobalSvgSelector scope="global" name="cancel"/><span>Отмена</span></button>
            </div>
            <div className={s.daysWrapper}>
                {
                    weekWeatherList.map((day) => (
                        <Day day={day} key={day.date}/>
                    ))
                }

            </div>
            <HourlyWeatherComponent hourlyWeather = {hourlyWeatherList}/>

        </div>
    )
}