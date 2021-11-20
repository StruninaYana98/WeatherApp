import React from 'react';
import Clear from './weather/clear.svg';
import FewClouds from './weather/few-clouds.svg';
import Cloudy from './weather/cloudy.svg';
import LightRain from './weather/light-rain.svg';
import Rain from './weather/rain.svg';
import HeavyRain from './weather/heavy-rain.svg';
import Thunder from './weather/thunder.svg';
import Drizzle from './weather/drizzle.svg';
import LightSnow from './weather/light-snow.svg';
import Snow from './weather/snow.svg';
import HeavySnow from './weather/heavy-snow.svg';
import { ReactComponent as Temperature } from './parameters/temperature.svg';
import { ReactComponent as Pressure } from './parameters/pressure.svg';
import { ReactComponent as Humidity } from './parameters/humidity.svg';
import { ReactComponent as Wind } from './parameters/wind.svg';
import {ReactComponent as Cancel} from './global/cancel.svg';
import {ReactComponent as AppIcon} from './global/app-icon.svg';
import {ReactComponent as Location} from './global/location.svg';
import {ReactComponent as Error} from './global/error.svg';

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
                case "error":
                    return <Error/>
                default:
                    return null;
            }
        case "weather":
            switch (name) {
                case "clear":
                    return <object type="image/svg+xml" data={Clear}>svg-animation</object>
                case "few-clouds":
                    return <object type="image/svg+xml" data={FewClouds}>svg-animation</object>
                case "cloudy":
                    return <object type="image/svg+xml" data={Cloudy}>svg-animation</object>
                case "light-rain":
                    return <object type="image/svg+xml" data={LightRain}>svg-animation</object>
                case "rain":
                    return <object type="image/svg+xml" data={Rain}>svg-animation</object>
                case "heavy-rain":
                    return <object type="image/svg+xml" data={HeavyRain}>svg-animation</object>
                case "thunder":
                    return <object type="image/svg+xml" data={Thunder}>svg-animation</object>
                case "drizzle":
                    return <object type="image/svg+xml" data={Drizzle}>svg-animation</object>
                case "light-snow":
                    return <object type="image/svg+xml" data={LightSnow}>svg-animation</object>
                case "snow":
                    return <object type="image/svg+xml" data={Snow}>svg-animation</object>
                case "heavy-snow":
                    return <object type="image/svg+xml" data={HeavySnow}>svg-animation</object>
                default:
                    return null;
            }
        case "parameters":
            switch (name) {
                case "temperature":
                    return <Temperature />
                case "pressure":
                    return <Pressure />
                case "humidity":
                    return <Humidity />
                case "wind":
                    return <Wind />

                default:
                    return null;
            }
        default:
            return null;
    }

}