import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import React, { useState , createContext} from "react";

export const ThemeContext = React.createContext();

const ContextSample = () => {

    const [ dark , setDark ] = useState("HI React useCOntext");

    return (<>
        <ThemeContext.Provider value={dark}>
            <FunctionalComponent />
            <ClassComponent />
        </ThemeContext.Provider>
    </>)
}

export default ContextSample;