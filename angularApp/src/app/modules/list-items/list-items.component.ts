import {
  ActivatedRoute,
  Params,
  Router
} from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';
import { ApiMercadolibreService } from 'src/app/core/services/api/api-mercadolibre.service';
import { ProductList } from 'src/app/core/models/product-list';
import { map } from 'rxjs';

@Component({
  templateUrl: './list-items.component.html',
  selector: 'app-list-items',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  results: ProductList[] = [];

  constructor(
    private meliService: ApiMercadolibreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      const search = params['search'];

      this.searchItem(search);
    });
  }

  searchItem(search: string) {
    this.meliService.getItems(search).pipe(
      map(({ results }) => {
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

        console.log(data);
        return data;
      }))
      .subscribe(res => {
        this.results = res.slice(0, 4);
        if (this.results.length === 0) {
          this.goBack();
        }
      });
  }

  goBack() {
    this.router.navigate(['/'], { queryParams: { searchResults: 'no-content' } });
  }
}
