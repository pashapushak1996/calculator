import {useReducer} from 'react';
import {initialState, reducer} from "./reducers";
import {plusOne, minusOne, plusOneHundred, minusOneHundred, reset, inputValue} from "./action-creators";
import './App.css';

const App = () => {
    let [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className={'container d-flex dir-column align-center'}>
            <h1>Calculator</h1>
            <h1 className={'counter-div '}>{state.counter}</h1>
            <div>
                <button className={'mx-10 btn'} onClick={() => plusOne(dispatch)}>1</button>
                <button className={'mx-10 btn'} onClick={() => minusOne(dispatch)}>-1</button>
            </div>
            <div className={'mx-10'}>
                <button className={'mx-10 btn'} onClick={() => plusOneHundred(dispatch)}>100</button>
                <button className={'mx-10 btn'} onClick={() => minusOneHundred(dispatch)}>-100</button>
            </div>
            <button className={'btn'} onClick={() => reset(dispatch)}>Reset</button>
          {/*todo прибрати форму, зробити контролйований інпут*/}
            <form className={'d-flex mx-10 align-center'} onSubmit={(e) => inputValue(e, dispatch, +e.target[0].value)}>
                <h3 className={'mx-10'}>Число:</h3>
                <input className={'btn'} type={'text'}/>
                <button className={'btn'}>Submit</button>
            </form>
        </div>
    );
}

export default App;
