import React from 'react';
import {handleCounter, reset} from "../../redux/action-creators";
import {useDispatch} from "react-redux";


export const Buttons = () => {
    let dispatch = useDispatch();
    return (
        <>
            <div>
                <button className={'mx-10 btn'}
                        onClick={() => {
                            dispatch(handleCounter(1))
                        }}>1
                </button>
                <button className={'mx-10 btn'}
                        onClick={() =>
                            dispatch(handleCounter(-1))}>-1
                </button>
            </div>
            <div className={'mx-10'}>
                <button className={'mx-10 btn'}
                        onClick={() =>
                            dispatch(handleCounter(100))}>100
                </button>
                <button className={'mx-10 btn'}
                        onClick={() =>
                            dispatch(handleCounter(-100))}>-100
                </button>
            </div>
            <button className={'btn'} onClick={() => reset(dispatch)}>Reset</button>
        </>
    );
}

