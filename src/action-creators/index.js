import {PLUS_ONE, MINUS_ONE, MINUS_ONE_HUNDRED, PLUS_ONE_HUNDRED, RESET, INPUT_VALUE} from "../action-types";
// todo змінити ці 4 метода на один

export const methods = {
    plusOne: (dispatch) => dispatch({type: PLUS_ONE}),
    minusOne: (dispatch) => dispatch({type: MINUS_ONE}),
    plusOneHundred: (dispatch) => dispatch({type: PLUS_ONE_HUNDRED}),
    minusOneHundred: (dispatch) => dispatch({type: MINUS_ONE_HUNDRED}),
}


export const reset = (dispatch) => dispatch({type: RESET});
export const inputValue = (dispatch, payload) => {
    dispatch({type: INPUT_VALUE, payload})
};
