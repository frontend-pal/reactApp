import axios from "axios";

// const mainUrl = 'https://api.mercadolibre.com';
const mainUrl = 'https://api.mercadolibre.com';
const siteId = 'MLA';


/**
 * 
 * @param {string} search palabras clave para busqueda
 * @param {number} offset posicion actual del valor total de items
 * @param {number} limit limite de los resultados de la respuesta
 * @returns un Observable de tipo SearchResponse
 */
export const getItems = async (search, offset = '', limit = '') => {
    const url = `${mainUrl}/sites/${siteId}/search?q=${search}&offset=${offset}&limit=${limit}`;

    return await axios.get(url);
}



/**
 * Este metodo obtiene los detalles del item por su ID
 * @param itemId id del producto a consultar
 * @returns un Observable con los datos solicitados
 */
export const getItemDetails = async (itemId) => {
    const url = `${mainUrl}/items/${itemId}`;

    return await axios.get(url);
}


/**
 * Este metodo obtiene por get la descripcion del item por su ID
 * @param itemId id del producto a consultar
 * @returns un Observable con los datos solicitados
 */
export const getItemDescription = async (itemId) => {
    const url = `${mainUrl}/items/${itemId}/description`;

    return await axios.get(url);
}
