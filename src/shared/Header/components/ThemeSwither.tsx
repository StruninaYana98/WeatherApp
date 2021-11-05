import React from 'react';
import s from "./ThemeSwither.module.scss";

interface Props {

}

export const ThemeSwither = (props: Props) => {
    return (
        <input className={s.themeSwither} type="checkbox" ></input>
    )
}