import { getItemDetails, getItems } from "../services/ApiMercadolibre";
import { types } from "../types/types";
import { setError } from "./errors";
import { toggleSpinner } from "./spinner";

export const activeItem = (id) => ({
    type: types.activeItem,
    payload: id
})

export const setItemDecription = (productDetails) => ({
    type: types.setDescription,
    payload: productDetails
})

export const removeDescription = () => ({
    type: types.removeDescription,
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

export const fetchItemDescription = (id) => {
    return async (dispatch) => {
        dispatch(toggleSpinner(true));
        try {
            const productDetails = await getItemDetails(id);

            console.log(productDetails);
            dispatch(setItemDecription(productDetails));
        } catch ({ message }) {
            dispatch(setError(message))
        } finally {
            dispatch(toggleSpinner(false));
        }
    }
}
