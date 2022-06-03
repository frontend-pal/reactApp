import { getItemDescription, getItemDetails, getItems } from "../services/ApiMercadolibre";
import { types } from "../types/types";
import { setError } from "./errors";
import { toggleSpinner } from "./spinner";

export const activeItem = (id) => ({
    type: types.activeItem,
    payload: id
})

export const setItemDetails = (productDetails) => ({
    type: types.setDetails,
    payload: productDetails
})

export const setItemDescription = (description) => ({
    type: types.setDescription,
    payload: description
})

export const removeDetails = () => ({
    type: types.removeDetails,
    payload: null
})

export const setItems = (items) => ({
    payload: items,
    type: types.loadItems
});

export const fetchItems = (query, offset, limit) => {
    return async (dispatch) => {
        dispatch(toggleSpinner(true));
        try {
            const response = await getItems(query, offset, limit);
            const { data } = response;
            const { results, paging } = data;
            const dataItems = results.map((obj) => ({
                available_quantity: obj.available_quantity,
                condition: obj.condition,
                description: '',
                id: obj.id,
                price: obj.price,
                site_id: obj.site_id,
                shipping: obj.shipping,
                title: obj.title,
                thumbnail: obj.thumbnail
            }));
            
            dispatch(setItems(dataItems));
            // dispatch(setPagination());
        } catch ({ message }) {
            dispatch(setError(message))
        } finally {
            dispatch(toggleSpinner(false));
        }
    }
}

export const fetchItemDetails = (id) => {
    return async (dispatch) => {
        dispatch(toggleSpinner(true));
        try {
            const productDetails = await getItemDetails(id);

            dispatch(setItemDetails(productDetails));
        } catch ({ message }) {
            dispatch(setError(message))
        } finally {
            dispatch(toggleSpinner(false));
        }
    }
}

export const fetchItemDescription = (id) => {
    return async (dispatch) => {
        dispatch(toggleSpinner(true));
        try {
            const productDetails = await getItemDescription(id);

            dispatch(setItemDescription(productDetails.data));
        } catch ({ message }) {
            dispatch(setError(message))
        } finally {
            dispatch(toggleSpinner(false));
        }
    }
}
