
import { Children, createContext, useState } from "react";

export const ThemeContext=createContext();
export const ThemeProvider=({children})=>{
    const[pen,setpen]=useState(15);
    const[penColor,setpenColor]=useState('red');
    const[showpen,setshowpen]=useState(false);
    const themeValue={
        pen,
        penColor,
        setpen,
        setpenColor,
        showpen,
        setshowpen
    }
    return(
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    )
}