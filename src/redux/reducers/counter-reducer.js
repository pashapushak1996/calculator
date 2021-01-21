import {INPUT_VALUE, RESET, CHANGE_VALUE} from "../action-types";

export const initialState = {
    counter: 0,
    buttons: [1, -1, 100, -100,50,-50],
    divElement: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case "SET_BUTTONS": {
        //     return {
        //         ...state,
        //         divElement: [state.buttons.map((el) => <button key={el}
        //                                                        className={'mx-10 btn'}>{el}</button>)]
        //     }
        // }
        case CHANGE_VALUE: {
            if (action.payload === 1) {
                return {
                    ...state, counter: state.counter + 1
                }
            }
            if (action.payload === -1) {
                return {
                    ...state, counter: state.counter - 1
                }
            }
            if (action.payload === +100) {
                return {
                    ...state, counter: state.counter + 100
                }
            }
            if (action.payload === -100) {
                return {
                    ...state, counter: state.counter - 100
                }
            }
            return {...state}
        }
        case RESET: {
            return {...state, counter: state.counter = 0}
        }
        case INPUT_VALUE: {
            const prevValue = state.counter;
            if (isNaN(action.payload)) {
                return {
                    ...state, counter: prevValue
                }
            }
            return {...state, counter: +action.payload + prevValue}
        }
        default: {
            return state;
        }
    }
}
