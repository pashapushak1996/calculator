import {RESET, INPUT_VALUE, CHANGE_VALUE} from "../action-types";
// todo змінити ці 4 метода на один дуже смішно але ніт невірно


export const handleCounter = (payload) => ({type: CHANGE_VALUE, payload})

export const reset = (dispatch) => dispatch({type: RESET});
export const inputValue = (dispatch, payload) => {
    dispatch({type: INPUT_VALUE, payload})
};
