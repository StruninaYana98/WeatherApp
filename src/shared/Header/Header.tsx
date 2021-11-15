import React from 'react';
import { GlobalSvgSelector } from '../../assets/svg/GlobalSvgSelector';
import { LocationSelector } from './components/LocationSelector';
import { ThemeSwither } from './components/ThemeSwither';
import s from "./Header.module.scss";

interface Props {

}

export const Header = (props: Props) => {

    const [expanded, setExpanded] = React.useState(false);

    function toggleLocationDropdown(){
        if(expanded){
            setExpanded(false);
        }else{
            setExpanded(true);
        }

    }
    return (
        <header className={s.header}>
            <div className={s.appNameWrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector scope="global" name="app-icon" />
                </div>
                <div className={s.appName}>{process.env.REACT_APP_APP_NAME}</div>
            </div>
            <div className={s.settings}>
                <div className={s.theme}><ThemeSwither/></div>
                <div className={`${s.locationIcon} button-prime ${ expanded ? "active" : ""}`} onClick={toggleLocationDropdown}> <GlobalSvgSelector scope="global" name="location" /></div>
                <div className={`${s.location} ${ expanded ? s.expanded : ""}`}><LocationSelector selected="Санкт-Петербург" options={["москва", "карснодар", "вологда"]} /></div>
            </div>

        </header>
    )
}