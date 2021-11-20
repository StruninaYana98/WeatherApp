import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LocationService } from '../../../services/LocationService';
import { WeatherService } from '../../../services/WeatherService';
import { AppDispatch, RootState } from '../../../store/store';
import s from "./LocationSelector.module.scss";
import { Location } from '../../../types/Location';

interface Props {
    selected: string;
    options: string[];
}

export const LocationSelector = ({ selected, options }: Props) => {
    const { location, countryCities } = useSelector((state: RootState) => state.locationReducer)
    const dispatch = useDispatch<AppDispatch>();
    const [expanded, toggleExpand] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const selectRef = React.createRef<HTMLDivElement>();
    const inputRef = React.createRef<HTMLInputElement>();

    const [filterString, setFilterString] = useState("");


    useEffect(() => {
        setInputValue(location.city)

    }, [location])

    function expandDropdown() {
        toggleExpand(true);
    }
    document.addEventListener('click', (event) => {
        if (selectRef.current && !(selectRef.current as any).contains(event.target)) {
            toggleExpand(false);
            setFilterString("");
            setInputValue(location.city);
        }


    })

    async function selectLocation(option: Location) {
        toggleExpand(false);
        await dispatch(LocationService.setCurrentLocation(option));
        await dispatch(WeatherService.getCurrentWeather(option.coord));
        await dispatch(WeatherService.getHourlyWeather(option.coord))
        await dispatch(WeatherService.getWeekWeather(option.coord));


    }

    function changeInputString(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)
        setFilterString(event.target.value);
        setInputValue(event.target.value);
    }

    return (
        <div className={s.selectDropdown} ref={selectRef}>
            <input ref={inputRef} className={s.selected} value={inputValue} onChange={changeInputString} onClick={expandDropdown}></input>
            {countryCities ?
                <ul className={`${s.options} ${expanded ? s.expanded : s.closed}`} >
                    {
                        countryCities.filter(option => option.city.toLowerCase().includes(filterString.toLowerCase())).map((option, index) => (
                            <li className={s.option} key={index} onClick={(event) => { event.stopPropagation(); selectLocation(option) }}>
                                {option.city}
                            </li>)
                        )

                    }

                </ul>
                : null}

        </div>
    )
}