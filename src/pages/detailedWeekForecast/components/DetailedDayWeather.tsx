import React from 'react';
import { GlobalSvgSelector } from '../../../assets/svg/GlobalSvgSelector';
import { DayWeather } from '../../../types/Weather';
import s from "./DetailedDayWeather.module.scss";

interface Props {
    day: DayWeather;
}

export const DetailedDayWeather = ({ day }: Props) => {
    return (
        <div className={s.detailedDayWrapper}>

            <div className={s.mainInformation}>
                <p className={s.day}>{day.day}</p>
                <p className={s.date}>{day.date}</p>
                <div className={s.logo}><GlobalSvgSelector scope={day.logo.scope} name={day.logo.name} /></div>
                <p className={s.maxTemp}><span>max: </span>{day.max_temp}</p>
                <p className={s.minTemp}><span>min: </span>{day.min_temp}</p>
                <p className={s.description}>{day.description}</p>
            </div>
            <div className={s.detailedInformation}>
                <div className={s.parameter}>
                    <div className={s.nameWrapper}>
                        <div className={s.logo}><GlobalSvgSelector scope="parameters" name="temperature" /></div>
                        <p className={s.name}>Temperature</p>
                    </div>
                    <div>
                        <p className={s.parameterValue}>day: {day.day_temp} feels like {day.feels_like_day_temp}</p>
                        <p className={s.parameterValue}>night: {day.night_temp} feels like {day.feels_like_night_temp}</p>
                    </div>
                </div>
                <div className={s.parameter}>
                    <div className={s.nameWrapper}>
                        <div className={s.logo}><GlobalSvgSelector scope="parameters" name="pressure" /></div>
                        <p className={s.name}>Pressure</p>
                    </div>
                    <div>
                        <p className={s.parameterValue}>{day.pressure}</p>
                    </div>
                </div>
                <div className={s.parameter}>
                    <div className={s.nameWrapper}>
                        <div className={s.logo}><GlobalSvgSelector scope="parameters" name="humidity" /></div>
                        <p className={s.name}>Humidity</p>
                    </div>
                    <div>
                        <p className={s.parameterValue}>{day.humidity}</p>
                    </div>
                </div>
                <div className={s.parameter}>
                    <div className={s.nameWrapper}>
                        <div className={s.logo}><GlobalSvgSelector scope="parameters" name="uvi" /></div>
                        <p className={s.name}>Uvi</p>
                    </div>
                    <div>
                        <p className={s.parameterValue}>{day.uvi}</p>
                    </div>
                </div>
                <div className={s.parameter}>
                    <div className={s.nameWrapper}>
                        <div className={s.logo}><GlobalSvgSelector scope="parameters" name="cloudiness" /></div>
                        <p className={s.name}>Cloudiness</p>
                    </div>
                    <div>
                        <p className={s.parameterValue}>{day.clouds}</p>
                    </div>
                </div>
                <div className={s.parameter}>
                    <div className={s.nameWrapper}>
                        <div className={s.logo}><GlobalSvgSelector scope="parameters" name="precipitation" /></div>
                        <p className={s.name}>Precipitation</p>
                    </div>
                    <div>
                        <p className={s.parameterValue}>{day.prob_of_precipitation}</p>
                    </div>
                </div>
                <div className={s.parameter}>
                    <div className={s.nameWrapper}>
                        <div className={s.logo}><GlobalSvgSelector scope="parameters" name="wind" /></div>
                        <p className={s.name}>Wind</p>
                    </div>
                    <div>
                        <p className={s.parameterValue}>{day.wind.speed}</p>
                    </div>
                </div>
            </div>


        </div>
    )
}