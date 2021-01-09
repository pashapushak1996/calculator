import {useReducer, useRef, useState} from 'react';
import {initialState, reducer} from "./reducers";
import {reset, inputValue, methods} from "./action-creators";
import './App.css';

const App = () => {
    let {plusOne, minusOne, plusOneHundred, minusOneHundred} = methods;
    let [state, dispatch] = useReducer(reducer, initialState);
    let [myInputValue, setInputValue] = useState('');

    return (
        <div className={'container d-flex dir-column align-center'}>
            <h1>Calculator</h1>
            <h1 className={'counter-div '}>{state.counter}</h1>
            <div>
                <button className={'mx-10 btn'}
                        onClick={() => plusOne(dispatch)}>1
                </button>
                <button className={'mx-10 btn'}
                        onClick={() => minusOne(dispatch)}>-1
                </button>
            </div>
            <div className={'mx-10'}>
                <button className={'mx-10 btn'}
                        onClick={() => plusOneHundred(dispatch)}>100
                </button>
                <button className={'mx-10 btn'}
                        onClick={() => minusOneHundred(dispatch)}>-100
                </button>
            </div>
            <button className={'btn'} onClick={() => reset(dispatch)}>Reset</button>
            <div className={'d-flex mx-10 align-center'}>
                <h3 className={'mx-10'}>Число:</h3>
                <input className={'btn'}
                       type={'text'}
                       onInput={({target:{value}}) => setInputValue(value)}
                       value={myInputValue}/>
                <button className={'btn'}
                        onClick={() => {
                            inputValue(dispatch, +myInputValue);
                        }}>Submit
                </button>
            </div>

        </div>
    );
}

export default App;
