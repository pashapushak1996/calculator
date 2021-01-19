import React from 'react';
import {useSelector} from "react-redux";

export const Result = () => {
    let counter = useSelector(({counter}) => counter);
    return (
        <div>
            <h1>Calculator</h1>
            <h1 className={'counter-div '}>{counter < 0 ? counter = 0 : +counter}</h1>
        </div>
    );
}

