import React, {useEffect} from 'react';
import {handleCounter, reset} from "../../redux/";
import {useDispatch, useSelector} from "react-redux";


export const Buttons = () => {
    let divElement = useSelector(({divElement}) => divElement);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: "SET_BUTTONS"})
    }, []);

    return (
        <>
            {
                divElement && divElement.map(el => el.map(el => {
                        const {key} = el;
                        return <div onClick={() => dispatch(handleCounter(+key))}>{el}</div>
                    }
                ))
            }
            <button className={'btn'} onClick={() => reset(dispatch)}>Reset</button>
        </>
    );
}

