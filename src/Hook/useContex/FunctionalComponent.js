import { useContext } from "react";
import {ThemeContext} from "./ContextSample";



const FunctionalComponent = () => {
    const darks = useContext(ThemeContext);
    return (
        <>
                <h1>FUnctional component {darks}</h1>
        </>
    )
}

export default FunctionalComponent;