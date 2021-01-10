import {PLUS_ONE, MINUS_ONE, MINUS_ONE_HUNDRED, PLUS_ONE_HUNDRED, RESET, INPUT_VALUE} from "../action-types";
// todo змінити ці 4 метода на один

export const handleCounter = (value, dispatch) => {
    if (value === 1) dispatch({type: PLUS_ONE});
    if (value === -1) dispatch({type: MINUS_ONE});
    if (value === 100) dispatch({type: PLUS_ONE_HUNDRED});
    if (value === -100) dispatch({type: MINUS_ONE_HUNDRED});
}

export const reset = (dispatch) => dispatch({type: RESET});
export const inputValue = (dispatch, payload) => {
    dispatch({type: INPUT_VALUE, payload})
};
