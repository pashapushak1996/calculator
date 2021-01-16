import {useReducer, useState} from 'react';
import {initialState, reducer} from "./reducers";
import {inputValue, reset, handleCounter} from "./action-creators";
import './App.css';


// dispatch(handleCounter(0)) // reset
// dispatch(handleCounter(Number(inputVal))) // inpChange
// dispatch(handleCounter(current + 1)) // inc
// dispatch(handleCounter(current - 1)) // dec
// dispatch(handleCounter(current + 100)) // inc
// dispatch(handleCounter(current - 100)) // dec


const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [myInputValue, setMyInputValue] = useState('');
    return (
        <div className={'container d-flex dir-column align-center'}>
            <h1>Calculator</h1>
            <h1 className={'counter-div '}>{state.counter < 0 ? state.counter = 0 : +state.counter}</h1>
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

        </div>
    );
}

export default App;
