import React, { useCallback, useEffect, useState } from 'react'

export default function UseCallbackSampleCode() {

    const [dark, setDark] = useState(false);
    const [count, setCount] = useState(0);

    const handleChangeTheme = useCallback(() => {
        if (dark) setDark(false);
        else setDark(true);
    }, [dark])
    // here we can find that List component are gettting rerender as we change theme which is not correct
    // const getCountVal = () => {
    //     return [count, count + 10, count + 20]
    // }
    const getCountVal = useCallback(() => {
        return [count, count + 10, count + 20]
    },[count])

    const themeStyle = {
        backgroundColor: dark ? '#342f57' : "#fff",
        color: dark ? "white" : "black"
    }

    return (
        <>
            <div style={themeStyle}>
                <input onChange={(e) => setCount(e.target.value)} value={count} type='number' />
                <List getCountVal={getCountVal} />
                <button onClick={handleChangeTheme}>Theme Mode</button>
            </div>
        </>
    )
}

const List = ({ getCountVal }) => {

    const [item, setItem] = useState([]);

    useEffect(() => {
        const countValues = getCountVal();
        setItem(countValues);
    }, [getCountVal])

    console.log("item==>", item);

    return (
        <>
            {item.map((p) => <h1>{p}</h1>)}
        </>
    )
}
