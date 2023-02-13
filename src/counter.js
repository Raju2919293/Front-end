import React from 'react';
import { useSelector, useDispatch } from "react-redux"
function Counter(props) {
    const counter = useSelector(state => state.counter);

    const dispatch = useDispatch()

    const add = () => {
        dispatch({ type: "add" })
    }
    const sub = () => {
        dispatch({ type: "sub" })
    }
    const  addby5 = () => {
        dispatch({ type: "increase",amount:5 })
    }
    return (
        <div>
            counter value {counter}

            <button onClick={add}>add</button>
            <button onClick={sub}>sub</button>
            <button onClick={addby5}>add by 5</button>
        </div>
    );
}

export default Counter;