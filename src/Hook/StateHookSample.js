import React, { useState } from "react";

const theme = {
    backgroundColor: "red",
    color: "white",
    width: '50vw',
    height: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const theme1 = {
    width: '50px',
    height: "20px",
}

function CallFunction(){
    console.log("Usestate defined called");
    return 4 ;
}


const StateHookSample = () => {


    // const [count, setCount] = useState(CallFunction());   // useState defination will called everytime as state update
    const [ count , setCount ] = useState(()=> CallFunction());   // useState defination called one time only



    console.log("Render due to state");


    
    const handleClickPlus = () => {
        // setCount(count + 1);             NOT MUCH CORRECT WAY
        setCount((prev) => prev+1 );        // CORRECT WAY
    }

    const handleClickMinus = () => {
        // setCount(count - 1);                  NOT MUCH CORRECT WAY
        setCount(prevCount => prevCount - 1); // CORRECT WAY
    }


    return (
        <div style={theme}>
            <button style={theme1}
                onClick={handleClickPlus}>+</button>

            {count}

            <button style={theme1}
                onClick={handleClickMinus}>-</button>
        </div>
    )
}

export default StateHookSample;