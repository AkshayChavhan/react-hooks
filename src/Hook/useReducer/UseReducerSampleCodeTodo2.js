import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    console.log("state , action => ", state, action);
    switch (action.type) {
        case 'addTodo':
            return [...state, NewTodo(action.payload)]
        case 'deleteTodo':
            return state.filter(todo => todo.id !== action.payload.id)
        case 'complete_status':
            return state.map(todo => {
                if(todo.id === action.payload){
                    return { ...todo , status : "Completed"}
                }
                return { ...state}
            })
        default:
            return [...state];
    }
}

const NewTodo = (payload) => {
    return { id: Date.now(), name: payload, status: 'Incompleted' }
}


export default function UseReducerSampleCodeTodo2() {

    const initialValue = [];

    const [name, setName] = useState("");
    const [state, dispatch] = useReducer(reducer, initialValue)

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: 'addTodo', payload: name })
        setName("");
    }

    const handleClickDelete = (payload) => {
        console.log("payload  => ", payload);
        dispatch({ type: 'deleteTodo', payload })
    }

    const handleClickStatus = (id) => {
        dispatch({ type: 'complete_status', payload: id })
    }

    console.log("state  => ", state);

    return (
        <>
            <div>Directory</div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </form>
            {(state.length !== 0) &&
                // <ul>
                state.map((item) => {
                    return (
                        <>  <div key={item.id}>
                            <h1 style={{color :  item.status==="Completed" ?  "green" : "red"}}>{item.name}</h1>
                            <button onClick={() => handleClickDelete(item)}> Delete</button>
                            <button onClick={() => handleClickStatus(item.id)}> Status</button>
                        </div>
                        </>
                    )
                })
                // </ul>
            }
        </>
    )
}
