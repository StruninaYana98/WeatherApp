import React from 'react';
import s from "./Header.module.scss";

interface Props{

}

export const Header = (props: Props) =>{
    return (
        <header className={s.header}>
            <div className={s.appName}>
                <svg className={s.logo} path=""></svg>
                <span></span>
            </div>
            <div></div>
        </header>
    )
}