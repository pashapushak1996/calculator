// import React, {useEffect} from 'react';
import React from 'react';
import {handleCounter, reset} from "../../redux/";
import {useDispatch, useSelector} from "react-redux";


export const Buttons = () => {
    let buttons = useSelector(({buttons}) => buttons);

    const dispatch = useDispatch();
    // useEffect(() => {
    //     // dispatch({type: "SET_BUTTONS"})
    // }, []);

    return (
        <div>
            {/*{*/}
            {/*    divElement && divElement.map(el => el.map(el => {*/}
            {/*            const {key} = el;*/}
            {/*            return <div onClick={() => dispatch(handleCounter(+key))}>{el}</div>*/}
            {/*        }*/}
            {/*    ))*/}
            {/*}*/}
            {
                buttons.map((el) => {
                    return (
                        <button
                            key={"key" + el}
                            className={'mx-10 btn'}
                            onClick={() => dispatch(handleCounter(el))}
                        > {el} </button>
                    )
                })
            }
            <button className={'btn'} onClick={() => reset(dispatch)}>Reset</button>
        </div>
    );
}

