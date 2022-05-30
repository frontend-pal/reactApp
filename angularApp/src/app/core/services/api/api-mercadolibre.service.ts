import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductDescription } from '../../models/product-description';
import { ProductDetail } from '../../models/product-detail';
import { SearchResponse } from "../../models/search-response";

@Injectable({
  providedIn: 'root'
})
export class ApiMercadolibreService {
  mainUrl = environment.mainUrl;
  siteId = environment.siteId;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 
   * @param {string} search palabras clave para busqueda
   * @param {number} offset posicion actual del valor total de items
   * @param {number} limit limite de los resultados de la respuesta
   * @returns un Observable de tipo SearchResponse
   */
  getItems(search: string, offset: number, limit: number) {
    return this.http.get<SearchResponse>
      (`${this.mainUrl}/sites/${this.siteId}/search?q=${search}&offset=${offset}&limit=${limit}`);
  }

  /**
   * Este metodo obtiene los detalles del item por su ID
   * @param itemId id del producto a consultar
   * @returns un Observable con los datos solicitados
   */
  getItemDetails(itemId: string) {
    return this.http.get<ProductDetail>(`${this.mainUrl}/items/${itemId}`);
  }

  /**
   * Este metodo obtiene por get la descripcion del item por su ID
   * @param itemId id del producto a consultar
   * @returns un Observable con los datos solicitados
   */
  getItemDescription(itemId: string) {
    return this.http.get<ProductDescription>(`${this.mainUrl}/items/${itemId}/description`);
  }
}
