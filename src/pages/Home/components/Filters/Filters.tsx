import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FilterMode } from '../../../../enums/FilterEnum';
import { FilterService } from '../../../../services/FilterService';
import { AppDispatch, RootState } from '../../../../store/store';
import { HourlyWeather } from './components/HourlyWeather';
import { WeekWeather } from './components/WeekWeather';
import s from "./Filters.module.scss";

interface Props {

}

export const Filters = (props: Props) => {

    const { filterMode } = useSelector((state: RootState) => state.filterReducer)
    const dispatch = useDispatch<AppDispatch>();

    async function setFilterMode(mode: FilterMode) {
        dispatch(FilterService.setFilterMode(mode));
    }

    return (
        <div className={s.componentWrapper}>
            <div className={s.filters}>
                <div className={s.periods}>
                    <button className={`button-second  ${FilterMode.HOURLY == filterMode ? "active" : ""}`} onClick={() => setFilterMode(FilterMode.HOURLY)}>next 48 hours</button>
                    <button className={`button-second  ${FilterMode.WEEK == filterMode ? "active" : ""}`} onClick={() => setFilterMode(FilterMode.WEEK)}>next week</button>
                </div>
            </div>
            {FilterMode.HOURLY == filterMode ?
                <HourlyWeather /> : null
            }
            {FilterMode.WEEK == filterMode ?
                <WeekWeather /> : null
            }

        </div>
    )
}