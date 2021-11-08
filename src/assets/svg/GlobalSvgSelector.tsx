import React from 'react';
import Day from './weather/day.svg';
import Cloudy from './weather/cloudy.svg';
import LightRain from './weather/light-rain.svg';
import Rain from './weather/rain.svg';
import { ReactComponent as Temperature } from './parameters/temperature.svg';
import { ReactComponent as Pressure } from './parameters/pressure.svg';
import { ReactComponent as Precipitation } from './parameters/precipitation.svg';
import { ReactComponent as Wind } from './parameters/wind.svg';
import {ReactComponent as Cancel} from './global/cancel.svg';
import {ReactComponent as AppIcon} from './global/app-icon.svg';
import {ReactComponent as Location} from './global/location.svg';

interface Props {
    scope: string;
    name: string;

}

export const GlobalSvgSelector = ({ scope, name }: Props) => {

    switch (scope) {
        case "global":
            switch (name) {
                case "cancel":
                    return <Cancel/>
                case "app-icon":
                    return <AppIcon/>
                case "location":
                    return <Location/>
                default:
                    return null;
            }
        case "weather":
            switch (name) {
                case "day":
                    return <object type="image/svg+xml" data={Day}>svg-animation</object>
                case "cloudy":
                    return <object type="image/svg+xml" data={Cloudy}>svg-animation</object>
                case "light-rain":
                    return <object type="image/svg+xml" data={LightRain}>svg-animation</object>
                case "rain":
                    return <object type="image/svg+xml" data={Rain}>svg-animation</object>
                default:
                    return null;
            }
        case "parameters":
            switch (name) {
                case "temperature":
                    return <Temperature />
                case "pressure":
                    return <Pressure />
                case "precipitation":
                    return <Precipitation />
                case "wind":
                    return <Wind />

                default:
                    return null;
            }
        default:
            return null;
    }

}