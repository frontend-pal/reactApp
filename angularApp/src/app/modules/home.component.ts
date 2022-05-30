import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { map } from 'rxjs';
import { ProductList } from '../core/models/product-list';
import { ApiMercadolibreService } from '../core/services/api/api-mercadolibre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  noResults = false;

  constructor(
    private route: ActivatedRoute,
    private meliService: ApiMercadolibreService
  ) { }

  // no se pudo docuemtnar con jsDoc
  // este metodo solo lee el parametro no content para mostrar
  // la página no resultados
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.noResults = params['searchResults'] === 'no-content';
    });
  }

}
