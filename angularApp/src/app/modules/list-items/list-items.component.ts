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
  limit = 4; // items per page tomado de la documentacion oficial!
  paginationData!: Paging;
  results: ProductList[] = [];

  constructor(
    private meliService: ApiMercadolibreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

    /**
  * al iniciar por primera vez este componente
  * realiza una busqueda 
  */
  ngOnInit(): void {
    this.sendSearch();
  }

  /**
  * Este metodo realiza una busqueda por get
  * ademas de esto formatea los resultados recibidos
  * con el metodo map creamos un arreglo con la informacion relevante para
  * cumplir con los ibjetivos de este challenge
  * Cambiando el offset recibido desde el paginador
  * @param {string} search parametro recibido desde el paginador
  */
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
        return data;
      }))
      .subscribe(res => {
        this.results = res;
        if (this.results.length === 0) {
          this.goBack();
        }
      });
  }

  /**
   * Este metodo actualiza la busqueda
   * el valor de la busqueda se obtiene por la- url
   */
  sendSearch() {
    this.route.queryParams.subscribe((params: Params) => {
      const search = params['search'];

      this.searchItem(search);
    });
  }

  /**
  * Este metodo obtiene valores d la busqueda pero en paginas diferentes
  * Cambiando el offset recibido desde el paginador
  * El valor del paginationData se cambia de manera temporal pues este se actualiza
  * despues de actualizar la busqueda
  * @param {number} offset parametro recibido desde el paginador
  */
  changePage(offset: number) {
    this.paginationData.offset = offset;
    this.sendSearch();
  }

  /**
   * Este metodo envia a no content del home
   */
  goBack() {
    this.router.navigate(['/'], { queryParams: { searchResults: 'no-content' } });
  }
}
