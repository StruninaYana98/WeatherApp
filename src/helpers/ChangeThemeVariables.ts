import { ThemeVariables } from "../enums/ThemeVariablesEnum";


export const ChangeThemeVariables = (theme:string) => {

    let root = document.querySelector(':root') as HTMLElement;

    Object.values(ThemeVariables).forEach((value)=>{
        root.style.setProperty(`--${value}`, `var(--${theme}-${value})`)
    })


}