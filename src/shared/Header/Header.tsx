import React from 'react';
import { GlobalSvgSelector } from '../../assets/svg/GlobalSvgSelector';
import { LocationSelector } from './components/LocationSelector';
import { ThemeSwither } from './components/ThemeSwither';
import s from "./Header.module.scss";

interface Props {

}

export const Header = (props: Props) => {
    return (
        <header className={s.header}>
            <div className={s.appNameWrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector scope="weather" name="day" />
                </div>
                <div className={s.appName}>Weather App</div>
            </div>
            <div className={s.settings}>
                <div className={s.theme}><ThemeSwither/></div>
                <div className={s.location}><LocationSelector selected="erfjer" options={["москва", "карснодар", "вологда"]} /></div>
            </div>

        </header>
    )
}