import { types } from "../types/types";

export const removeError = (err) => ({
    payload: err,
    type: types.removeError
});

export const setError = (err) => ({
    payload: err,
    type: types.setError
});