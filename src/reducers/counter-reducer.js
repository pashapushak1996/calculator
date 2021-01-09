import {INPUT_VALUE, MINUS_ONE, MINUS_ONE_HUNDRED, PLUS_ONE, PLUS_ONE_HUNDRED, RESET} from "../action-types";

export const initialState = {
    counter: 0
}

export const reducer = (state, action) => {
    switch (action.type) {
        case PLUS_ONE: {
            return {...state, counter: state.counter + 1}
        }
        case MINUS_ONE: {
            const prevValue = state.counter;
            if (prevValue < 0 || prevValue === 0) {
                return state
            }
            return {...state, counter: state.counter - 1}
        }
        case PLUS_ONE_HUNDRED: {
            return {...state, counter: state.counter + 100}
        }
        case MINUS_ONE_HUNDRED: {
            const prevValue = state.counter;
            if (prevValue < 0 || prevValue === 0) {
                return state
            }
            return {...state, counter: state.counter - 100}
        }
        case RESET : {
            return {...state, counter: state.counter = 0}
        }
        case INPUT_VALUE: {
            const prevValue = state.counter;
            if (action.payload < 0 || action.payload === 0) {
                return {counter: prevValue}
            }
            return {...state, counter: action.payload + prevValue}
        }
        default: {
            return state;
        }
    }
}