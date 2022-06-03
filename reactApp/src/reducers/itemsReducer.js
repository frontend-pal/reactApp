import { types } from "../types/types";

const initialState = {
    items: [],
    active: null
}

export const itemsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.activeItem:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.loadItems:
            return {
                ...state,
                items: [
                    ...action.payload
                ]
            }
        default:
            return state;
    }
}
