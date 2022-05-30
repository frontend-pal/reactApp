import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
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

  // getItems(search: string) {
  //   return this.http.get<SearchResponse>(`${this.mainUrl}/sites/${this.siteId}/search?q=${search}`);
  //   // .pipe(
  //   //   map(({ results }) => {
  //   //     console.log(results);
  //   //     const data = results.map((obj: any) => ({
  //   //       available_quantity: obj.available_quantity,
  //   //       condition: obj.condition,
  //   //       id: obj.id,
  //   //       price: obj.price,
  //   //       site_id: obj.site_id,
  //   //       shipping: obj.shipping,
  //   //       title: obj.title,
  //   //       thumbnail: obj.thumbnail,
  //   //     }));

  //   //     return data;
  //   //   }
  //   //   ));
  //   // return query;
  // }

  getItems(search: string, offset: number, limit: number) {
    console.log(search)
    return this.http.get<SearchResponse>
      (`${this.mainUrl}/sites/${this.siteId}/search?q=${search}&offset=${offset}&limit=${limit}`);
  }

  getItemDetails(itemId: string) {
    return this.http.get<ProductDetail>(`${this.mainUrl}/items/${itemId}`);
  }

  getItemDescription(itemId: string) {
    return this.http.get<ProductDescription>(`${this.mainUrl}/items/${itemId}/description`);
  }
}
