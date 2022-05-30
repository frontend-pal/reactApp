/**
 * Este archivo fue creado usando el servicio gratuito
 * para transformar json a modelo de typescript
 * http://json2ts.com/
 */

import { Shipping } from "./search-response"

export interface ProductList {
    available_quantity: number;
    condition: string;
    id: string;
    price: number;
    site_id: string;
    shipping: Shipping;
    title: string;
    thumbnail: string;
}