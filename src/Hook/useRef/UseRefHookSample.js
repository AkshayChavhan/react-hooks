import { useEffect, useRef } from "react";
import { useState } from "react";


const UseRefHookSample = () => {
    const [ name , setName ] = useState("");

    // useCase of ref is that it is not re-render as the value inside it is updates.
    // becasue of which you will not get the value.

    // ref use for focusing inputs
    const focusInput = useRef();
    console.log(focusInput)


    // value changed using ref
    function focusFunction(){
        focusInput.current.value = "Value changed";
        focusInput.current.size = 500;
        focusInput.current.draggable = true;
    }

    useEffect(()=>{

    },[name])

    return (
        <>
            <input ref={focusInput} onChange={(e) => setName(e.target.value)}/>
            <div>My name is {name}</div>
            <button onClick={focusFunction}>Update</button>
        </>
    )
}

export default UseRefHookSample;