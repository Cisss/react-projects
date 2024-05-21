import React from "react";
import styling from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions/counterAction";

const Counter = () => {
    // The useSelector hook is used to access the counter state from the Redux store.
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        console.log("ready for increment");
        dispatch(increment());
    }
    const handleDecrement = () => {
        console.log("ready for increment");
        dispatch(decrement());
    }

    return (
        <section className="content">
            <div className={styling.wrapper}>
                <h2 className={styling.title}>Counter: {counter}</h2>
                {console.log({counter})}
                <button className={`button ${styling.buttonCounter}`} onClick={handleIncrement}>Increment</button>
                <button className={`button ${styling.buttonCounter}`} onClick={handleDecrement}>Decrement</button>
            </div>
        </section>
    )
}

export default Counter;