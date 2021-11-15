import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LocationService } from '../../../services/LocationService';
import { WeatherService } from '../../../services/WeatherService';
import { AppDispatch, RootState } from '../../../store/store';
import s from "./LocationSelector.module.scss";

interface Props {
    selected: string;
    options: string[];
}

export const LocationSelector = ({ selected, options }: Props) => {
    const { location, countryCities } = useSelector((state: RootState) => state.locationReducer)
    const dispatch = useDispatch<AppDispatch>();
    const [expanded, toggleExpand] = useState(false);
    const selectRef = React.createRef<HTMLDivElement>();

    function expandDropdown() {
        toggleExpand(true);
    }
    document.addEventListener('click', (event) => {
        if (selectRef.current && !(selectRef.current as any).contains(event.target)) {
            toggleExpand(false);

        }

    })

    async function selectLocation(option:string){
           await dispatch(LocationService.setCurrentLocation(option));
           await dispatch(WeatherService.getCurrentWeather(option))
    }

    return (
        <div className={s.selectDropdown} ref={selectRef}>
            <input className={s.selected} defaultValue={location.city}  onClick={expandDropdown}></input>
            {countryCities ?
                <ul className={`${s.options} ${expanded ? s.expanded : s.closed}`} >
                    {
                        countryCities.map((option,index) => (
                            <li className={s.option} key={index}  onClick={()=>selectLocation(option)}>
                                {option}
                            </li>)
                        )

                    }

                </ul>
                : null}

        </div>
    )
}