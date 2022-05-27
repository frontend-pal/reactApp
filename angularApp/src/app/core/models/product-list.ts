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