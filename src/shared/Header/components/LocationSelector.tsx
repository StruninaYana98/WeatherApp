import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LocationService } from '../../../services/LocationService';
import { WeatherService } from '../../../services/WeatherService';
import { AppDispatch, RootState } from '../../../store/store';
import s from "./LocationSelector.module.scss";
import {Location} from '../../../types/Location';

interface Props {
    selected: string;
    options: string[];
}

export const LocationSelector = ({ selected, options }: Props) => {
    const { location, countryCities } = useSelector((state: RootState) => state.locationReducer)
    const dispatch = useDispatch<AppDispatch>();
    const [expanded, toggleExpand] = useState(false);
    const selectRef = React.createRef<HTMLDivElement>();
    const inputRef = React.createRef<HTMLInputElement>();

    const [filterString, setFilterString] = useState("");

    function expandDropdown() {
        toggleExpand(true);
    }
    document.addEventListener('click', (event) => {
        if (selectRef.current && !(selectRef.current as any).contains(event.target)) {
            toggleExpand(false);
        }
       

    })

    async function selectLocation(option:Location){
           await dispatch(LocationService.setCurrentLocation(option));
           await dispatch(WeatherService.getCurrentWeather(option.coord));
           await dispatch(WeatherService.getHourlyWeather(option.coord))
           await dispatch(WeatherService.getWeekWeather(option.coord));

    }

    function changeInputString(event: React.ChangeEvent<HTMLInputElement>){
        console.log(event.target.value)
           setFilterString(event.target.value)
    }
    function clearFilter(event: React.FocusEvent<HTMLInputElement, Element>){
        console.log("blur")
        
        event.target.value=location.city;
        setFilterString("");
    }

    return (
        <div className={s.selectDropdown} ref={selectRef}>
            <input ref = {inputRef} className={s.selected} defaultValue={location.city} onChange={changeInputString} onBlur={clearFilter} onClick={expandDropdown}></input>
            {countryCities ?
                <ul className={`${s.options} ${expanded ? s.expanded : s.closed}`} >
                    {
                        countryCities.filter(option=>option.city.toLowerCase().includes(filterString.toLowerCase())).map((option,index) => (
                            <li className={s.option} key={index}  onClick={(event)=>{event.stopPropagation(); selectLocation(option)}}>
                                {option.city}
                            </li>)
                        )

                    }

                </ul>
                : null}

        </div>
    )
}