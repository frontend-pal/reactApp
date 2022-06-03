import { types } from "../types/types";

export const search = (formId, inputValue) => (
    {
        type: types.sendSearch,
        payload: {            
            formId,
            inputValue
        }
    }
)