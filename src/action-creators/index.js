import {PLUS_ONE, MINUS_ONE, MINUS_ONE_HUNDRED, PLUS_ONE_HUNDRED, RESET, INPUT_VALUE} from "../action-types";
// todo змінити ці 4 метода на один
export const plusOne = (dispatch) => dispatch({type: PLUS_ONE});
export const minusOne = (dispatch) => dispatch({type: MINUS_ONE});
export const plusOneHundred = (dispatch) => dispatch({type: PLUS_ONE_HUNDRED});
export const minusOneHundred = (dispatch) => dispatch({type: MINUS_ONE_HUNDRED});



export const reset = (dispatch) => dispatch({type: RESET});
export const inputValue = (e,dispatch,payload) => {
    e.preventDefault()
    dispatch({type:INPUT_VALUE,payload})
};
