import { useReducer } from "react";

const reducer = (state, action) => {
    console.log("state ,action" ,state ,action);
    switch (action) {
        case 'increament':
            return {count : state.count + 1}
        case 'decreament':
            return { count : state.count - 1}
        default:
            return state
    }
}


const UseReducerSampleCode = () => {

    const initialState = {
        count: 0
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    const handlePlusClick = () => {
        dispatch("increament")
    }

    const handleMinusClick = () => {
        dispatch("decreament")
    }

    return (
        <>
            <button onClick={handlePlusClick}>+</button>
            <div>{state.count}</div>
            <button onClick={handleMinusClick}>-</button>
        </>
    )
}

export default UseReducerSampleCode;