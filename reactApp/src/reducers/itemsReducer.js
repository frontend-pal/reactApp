import { types } from "../types/types";

const initialState = {
    items: [],
    active: '',
    details: {
        id: '',
        attributes: [],
        pictures: [],
        description: ''
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

        case types.setDetails:
            return {
                ...state,
                active: action.payload.data.id,
                details: {
                    ...action.payload.data
                }
            }

        case types.setDescription:            
            return {
                ...state,
                details: {
                    ...state.details,
                    description: action.payload.plain_text
                }              
            }

        case types.removeDetails:
            return {
                ...state,
                active: initialState.active,
                details: initialState.details
            }

        default:
            return state;
    }
}

// export const setItemDetails = (productDetails) => ({
//     type: types.setDetails,
//     payload: productDetails
// })

// export const removeDetails = () => ({
//     type: types.removeDetails,
//     payload: null
// })
