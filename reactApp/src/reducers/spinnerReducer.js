import { types } from "../types/types";

const initialState = {
    loading: false,
    errorLog: null
};

export const spinnerReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.setError:
            return {
                ...state,
                errorLog: action.payload
            }

        case types.removeError:
            return {
                ...state,
                errorLog: null
            }

        case types.showSpinner:
            return {
                ...state,
                loading: action?.payload || true
            }

        case types.hideSpinner:
            return {
                ...state,
                loading: action?.payload || false
            }

        default:
            return state;
    }

}
