import { types } from "../types/types";

const initialState = {
    items: [],
    active: '',
    description: {
        id: '',
        attributes: [],
        pictures: []
    }
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

        case types.setDescription:
            return {
                ...state,
                description: {
                    ...action.payload.data
                }
            }

        case types.removeDescription:
            return {
                ...state,
                active: initialState.active,
                description: initialState.description
            }

        default:
            return state;
    }
}

// export const setItemDecription = (productDetails) => ({
//     type: types.setDescription,
//     payload: productDetails
// })

// export const removeDescription = () => ({
//     type: types.removeDescription,
//     payload: null
// })
