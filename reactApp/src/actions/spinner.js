import { types } from "../types/types";

export const removeError = (err) => ({
    payload: err,
    type: types.removeError
});

export const setError = (err) => ({
    payload: err,
    type: types.setError
});

export const toggleSpinner = (display = false) => ({
    payload: display,
    type: display ? types.showSpinner : types.hideSpinner
});


