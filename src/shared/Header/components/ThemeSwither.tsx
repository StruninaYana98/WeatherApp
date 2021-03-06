import React from 'react';
import { Theme } from '../../../enums/ThemeEnum';
import { useTheme } from '../../../hooks/useTheme';
import s from "./ThemeSwither.module.scss";

interface Props {

}

export const ThemeSwither = (props: Props) => {

    const themeContext = useTheme();

    function SwitchTheme(event: React.ChangeEvent<HTMLInputElement>) {
        let target = event.target && event.target as HTMLInputElement;

        if (target && target.checked) {
            themeContext.changeTheme(Theme.DARK);
        } else {
            themeContext.changeTheme(Theme.LIGHT);
        }

    }
    return (
        <input className={s.themeSwither} type="checkbox" onChange={SwitchTheme} defaultChecked={themeContext.theme === Theme.DARK}></input>
    )
}