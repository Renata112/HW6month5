import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, decrementTen, increment, incrementTen, reset} from "../redux/reducer";

const CounterPage = () => {
    const {count} = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();
    const plus = (e) => {
        dispatch(increment(e))
    }
    const plusTen = (e) => {
        dispatch(incrementTen(e))
    }
    const minus = (e) => {
        if (count>0){
            dispatch(decrement(e))
        }
    }
    const minusTen = (e) => {
        if (count>10){
            dispatch(decrementTen(e))

        }
    }
    const cha = ( ) => {
        dispatch(reset())
    }


    return (
        <div>
            <span>{count}</span>
            <button onClick={() => plus(1)}>+</button>
            <button onClick={() => plusTen(10)}>+10</button>
            <button onClick={() => minus(1)}>-</button>
            <button onClick={() => minusTen(10)}>-10</button>
            <button onClick={cha}>Reset</button>
        </div>
    );
};

export default CounterPage;