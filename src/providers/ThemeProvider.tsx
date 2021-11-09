import { ReactNode, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Theme } from "../enums/ThemeEnum";
import { ChangeThemeVariables } from "../helpers/ChangeThemeVariables";
import { Storage } from "../helpers/Storage";

interface Props {
    children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {

    const [theme, setTheme] = useState(Storage.getItem("theme") as Theme || Theme.LIGHT);

    ChangeThemeVariables(theme);

    function changeTheme(theme: Theme) {
        setTheme(theme);
        ChangeThemeVariables(theme);
        Storage.setItem("theme", theme);
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
            {children}

        </ThemeContext.Provider>
    )

}