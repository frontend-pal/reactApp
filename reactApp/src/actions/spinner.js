import { types } from "../types/types";

export const toggleSpinner = (display = false) => ({
    payload: display,
    type: display ? types.showSpinner : types.hideSpinner
});


