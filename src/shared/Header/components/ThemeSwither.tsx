import React from 'react';
import s from "./ThemeSwither.module.scss";

interface Props {

}

export const ThemeSwither = (props: Props) => {

    const [theme, setTheme] = React.useState('light')

    React.useEffect(() => {
        let themeVariables = ["theme-base", "theme-prime", "theme-second", "theme-accent", "border-prime", "border-second", "body-color"];

        let root = document.querySelector(':root') as HTMLElement;
        console.log(root);

        for (let i = 0; i < themeVariables.length; i++) {
            console.log(`--${themeVariables[i]}`)
            console.log(`var(#{--${theme}-${themeVariables[i]}})`);
            root.style.setProperty(`--${themeVariables[i]}`, `var(--${theme}-${themeVariables[i]})`)
        }



    }, [theme])

    function SwitchTheme(event: React.MouseEvent<HTMLInputElement, MouseEvent>) {
        let target = event.target && event.target as HTMLInputElement;
        if (target && target.checked) {
            console.log('dark')
            setTheme('dark');
        } else {
            console.log('light')
            setTheme('light')
        }

    }
    return (
        <input className={s.themeSwither} type="checkbox" onClick={SwitchTheme}></input>
    )
}