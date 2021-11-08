import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import s from "./ThemeSwither.module.scss";

interface Props {

}

export const ThemeSwither = (props: Props) => {


    const themeContext = useTheme();

    React.useEffect(() => {
        let themeVariables = ["theme-base", "theme-prime", "theme-second", "theme-accent", "border-prime", "border-second", "body-color"];

        let root = document.querySelector(':root') as HTMLElement;

        for (let i = 0; i < themeVariables.length; i++) {

            root.style.setProperty(`--${themeVariables[i]}`, `var(--${themeContext.theme}-${themeVariables[i]})`)
        }

    }, [themeContext.theme])

    function SwitchTheme(event: React.MouseEvent<HTMLInputElement, MouseEvent>) {
        let target = event.target && event.target as HTMLInputElement;

        if (target && target.checked) {
            themeContext.changeTheme('dark');
        } else {
            themeContext.changeTheme('light');
        }

    }
    return (
        <input className={s.themeSwither} type="checkbox" onClick={SwitchTheme} checked={themeContext.theme === "dark"}></input>
    )
}