import React from 'react';
import  Day  from './weather/day.svg';

interface Props {
    scope: string;
    name: string;

}

export const GlobalSvgSelector = ({ scope, name }: Props) => {

    switch (scope) {
        case "weather":
            switch (name) {
                case "day":
                    return<object type="image/svg+xml" data={Day}>svg-animation</object>
                default:
                    return null;
            }
        default:
            return null;
    }

}