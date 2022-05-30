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
import { Paging } from 'src/app/core/models/search-response';

@Component({
  templateUrl: './list-items.component.html',
  selector: 'app-list-items',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  results: ProductList[] = [];
  limit = 4; // items per page 
  paginationData!: Paging;

  constructor(
    private meliService: ApiMercadolibreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sendSearch();
  }

  searchItem(search: string) {
    const offset = this.paginationData?.offset || 0;

    this.meliService.getItems(search, offset, this.limit).pipe(
      map(({ results, paging }) => {
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

        this.paginationData = paging;
        console.log(this.paginationData);
        return data;
      }))
      .subscribe(res => {
        this.results = res;
        if (this.results.length === 0) {
          this.goBack();
        }
      });
  }

  sendSearch() {
    this.route.queryParams.subscribe((params: Params) => {
      const search = params['search'];

      this.searchItem(search);
    });
  }

  changePage(offset: number) {
    console.log(offset);
    this.paginationData.offset = offset;
    this.sendSearch();
  }

  goBack() {
    this.router.navigate(['/'], { queryParams: { searchResults: 'no-content' } });
  }
}
