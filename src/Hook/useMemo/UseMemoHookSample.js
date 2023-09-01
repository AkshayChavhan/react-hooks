import { useMemo, useState } from "react";

const UseMemoHookSample = () => {

    const [number, setNumber] = useState(10);
    const [dark, setDark] = useState(false);



    // here doublefunction taking much time to complete
    // doublefunction depends on number if its not change then there will be no change in result
    // const doubleFunction = (num) => {
    //     for(let i=0; i==100000 ; i++){}
    //     return setNumber(num * 2) ;
    // }


    // SOLUTION FOR DOUBLEFUNCTION
    const doubleFunction = (num) => {
        for (let i = 0; i == 100000; i++) { }
        return setNumber(num * 2);
    }

    const slowFunction = useMemo(() => {
        doubleFunction();
    }, [number])

    const handleTheme = () => {
        if (dark) setDark(false)
        else setDark(true);
    }

    // here themestyle is an object so it will recreate everytime
    // theme style depends on dark if its not change then there will be no change in result
    // const themeStyle = {
    //     backgroundColor : dark ? "black" : "white",
    //     color : dark ? "white" : "black"
    // }

    const themeStyle = useMemo(()=> {
        return {
        backgroundColor: dark ? "black" : "white",
        color : dark ? "white" : "black"
    }},[dark]);

    return (
        <>
            <input type="number" onChange={(e) => slowFunction(e.target.value)} />
            <div style={themeStyle}>{number}</div>
            <button onClick={handleTheme}>Thme CHnage</button>
        </>
    )
}

export default UseMemoHookSample;