import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/svg/GlobalSvgSelector';
import s from "./ThisDayInfo.module.scss";

interface Props {

}

export const ThisDayInfo = (props: Props) => {
    let parameters = [
        {
            name: 'Температура',
            logo: {
                scope: 'parameters',
                name: 'temperature',
            },
            description: '20 - ощущается как 17'

        },
        {
            name: 'Давление',
            logo: {
                scope: 'parameters',
                name: 'pressure',
            },
            description: '755 мм ртутного столба - нормальное'

        },
        {
            name: 'Осадки',
            logo: {
                scope: 'parameters',
                name: 'precipitation',
            },
            description: 'Без осадков'

        },
        {
            name: 'Ветер',
            logo: {
                scope: 'parameters',
                name: 'wind',
            },
            description: '3 м/с юго-запад - легкий ветер'

        }


    ]
    return (
        <div className={s.dayInfoWrapper}>
            {
                parameters.map((parameter) => (
                    <div className={s.parameter}>
                        <div className={s.nameWrapper}>
                        <div className={s.logo}><GlobalSvgSelector scope={parameter.logo.scope} name={parameter.logo.name} /></div>
                        <p className={s.name}>{parameter.name}</p>
                        </div>
                        <p className={s.description}>{parameter.description}</p>
                    </div>
                ))
            }

        </div>
    )
}