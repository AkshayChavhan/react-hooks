import { useEffect, useState } from "react";


const UseEffectComponentSample = () => {
    const [count, setCount] = useState({
        number: 5,
        name: "Akshay"
    });

    console.log("Component render");


    // this will called on every render
    useEffect(() => {
        console.log("useEffect with no dep array");
    })

    // this will called on mounting of component
    useEffect(() => {
        console.log("useEffect with no dep with array");
    }, [])


    // this will called on specific change
    useEffect(() => {
        console.log("useEffect with dep");
    }, [count])


    // this will called on specific change and CLEANUP FUNCTION
    useEffect(() => {
        return ()=> console.log("unmounting component");
    }, [])

    // this will called on specific change that is Name
    useEffect(() => {
        console.log("useEffect for name");
    }, [count.name])


    const handleClickPlus = () => {
        setCount((prev) => {
            return { ...prev, number: prev.number + 1 }
        })
    }

    const handleClickMinus = () => {
        setCount((prev) => {
            return { ...prev, number: prev.number - 1 }
        })
    }


    const handleClickName = () => {
        setCount((prev) => {
            return { ...prev, name: `${prev.name} - ${prev.count}` }
        })
    }

    return (
        <>
            <button onClick={handleClickPlus}> + </button>
            Count : - {count.number}
            <button onClick={handleClickMinus}> - </button>
            Name : - {count.name}
            <button onClick={handleClickName}> Name change </button>
        </>
    )
}

export default UseEffectComponentSample;