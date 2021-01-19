import React, {useState} from 'react';
import {inputValue} from "../../redux/action-creators";
import {useDispatch} from "react-redux";

export const Input = () => {
    let dispatch = useDispatch();
    let [myInputValue, setMyInputValue] = useState('');
    return (
        <div className={'d-flex mx-10 align-center'}>
            <h3 className={'mx-10'}>Число:</h3>
            <input type="text"
                   onInput={({target: {value}}) =>
                       setMyInputValue(value)
                   }
                   value={myInputValue}/>
            <button className={'btn'}
                    onClick={() => {
                        myInputValue > 0 ? inputValue(dispatch, myInputValue) : setMyInputValue('');
                        setMyInputValue('');
                    }}>Submit
            </button>
        </div>
    );
}

