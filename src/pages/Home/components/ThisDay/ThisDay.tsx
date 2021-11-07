import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/svg/GlobalSvgSelector';
import s from "./ThisDay.module.scss";

interface Props {

}

export const ThisDay = (props: Props) => {
    return (
        <div className={s.thisDayWrapper}>
            <div className={s.dayWrapper}>
                <div>
                    <p className={s.degrees}>20</p>
                    <p className={s.day}>сегодня</p>
                </div>
                <div className={s.icon}><GlobalSvgSelector scope="weather" name="day" /></div>
            </div>
            <div className={s.information}>
                <p>Время: 21:54</p>
                <p>Город: Санкт-Петербург</p>

            </div>
        </div>
    )
}