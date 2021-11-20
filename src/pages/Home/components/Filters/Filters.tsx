import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GlobalSvgSelector } from '../../../../assets/svg/GlobalSvgSelector';
import { FilterMode } from '../../../../enums/FilterEnum';
import { FilterService } from '../../../../services/FilterService';
import { Loader } from '../../../../shared/Loader/Loader';
import { AppDispatch, RootState } from '../../../../store/store';
import { Day } from './components/Day';
import { HourlyWeatherComponent } from './components/HourlyWeatherComponent';
import s from "./Filters.module.scss";

interface Props {

}

export const Filters = (props: Props) => {
    const { weekWeatherList } = useSelector((state: RootState) => state.weekWeatherReducer);
    const { hourlyWeatherList, isFetchingSuccessful } = useSelector((state: RootState) => state.hourlyWeatherReducer)
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
                    <NavLink to="/month-statistic" className={`button-second  ${FilterMode.FOR_16_DAYS == filterMode ? "active" : ""}`} onClick={() => setFilterMode(FilterMode.FOR_16_DAYS)}>next 16 days</NavLink>
                </div>
            </div>
            {FilterMode.WEEK == filterMode ?
                <div className={s.daysWrapper}>
                    {
                        weekWeatherList.map((day) => (
                            <Day day={day} key={day.date} />
                        ))
                    }

                </div> : null
            }
            {FilterMode.HOURLY == filterMode ?
                isFetchingSuccessful ?
                    <HourlyWeatherComponent hourlyWeather={hourlyWeatherList} /> : <div className={s.loaderWrapper}> <Loader /> </div>: null

            }

        </div>
    )
}