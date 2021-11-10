import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { WeatherService } from '../../services/WeatherService';
import { AppDispatch } from '../../store/store';
import { Days } from './components/Days/Days';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import s from "./Home.module.scss";

interface Props {

}

export const Home = (props: Props) => {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(WeatherService.getCurrentWeather(498817));
    })
    
    return (
        <div className={s.home}>
            <div className={s.currentDay}>
                <ThisDay />
                <ThisDayInfo />
            </div>
            <Days />
        </div>
    )
}