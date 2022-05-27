import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ProductList } from 'src/app/core/models/product-list';
import { ApiMercadolibreService } from 'src/app/core/services/api/api-mercadolibre.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  results: ProductList[] = [];

  constructor(
    private meliService: ApiMercadolibreService
  ) { }

  ngOnInit(): void {
    console.log("#enmtre aqui");
    this.getSearchItem();
  }

  getSearchItem() {
    this.meliService.searchItems('iphone').pipe(
      map(({ results }) => {
        console.log(results);
        const data = results.map((obj: ProductList) => ({
          available_quantity: obj.available_quantity,
          condition: obj.condition,
          id: obj.id,
          price: obj.price,
          site_id: obj.site_id,
          shipping: obj.shipping,
          title: obj.title,
          thumbnail: obj.thumbnail
        }));

        return data;
      }))
      .subscribe(res => {
        this.results = res.slice(0, 4);
      });
  }  

}
