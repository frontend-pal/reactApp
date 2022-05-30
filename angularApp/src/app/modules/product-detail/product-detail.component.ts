import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Attribute, Picture, ProductDetail } from 'src/app/core/models/product-detail';
import { ApiMercadolibreService } from 'src/app/core/services/api/api-mercadolibre.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id!: string | null;
  plainText: string = '';
  productDetails!: ProductDetail;
  condition: Attribute | undefined;
  pictures: Picture[] | [] = [];
  currentPicture!: Picture | undefined;

  constructor(
    private meliService: ApiMercadolibreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // Captura el id de la url
  // si este no existe envia a la pagina de home
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');

      if (this.id && this.id !== '') {
        this.getDetails(this.id);
        this.getDescription(this.id);
      } else {
        this.goBack();
      }
    });
  }

  /**
   * Este metodo por get los detalles del item seleccionado
   * si el valos es 0 o tenemos un error enviara atras como no content
   * @param itemId El id del item actual seleccionado
   */
  getDetails(itemId: string) {
    this.meliService.getItemDetails(itemId).subscribe(res => {
      this.productDetails = res;
      this.condition = this.productDetails.attributes.find(x => x.id === 'ITEM_CONDITION');
      this.pictures = this.productDetails.pictures && this.productDetails.pictures.length > 0 ? this.productDetails.pictures : [];
      this.currentPicture = this.pictures[0];
    }, err => {
      console.log(err);
      this.goBack();
    })
  }

  /**
   * Este metodo obtiene por get la descripcion del item
   *  y la formatea para verla en pantalla
   * la descripcion del item seleccionado
   */
  getDescription(itemId: string) {
    this.meliService.getItemDescription(itemId).subscribe(res => {
      this.plainText = res.plain_text.replace(/(?:\r\n|\r|\n)/g, '<br>');
    })
  }

  /**
   * Este metodo envia a no content del home
   */
  goBack() {
    this.router.navigate(['/'], { queryParams: { searchResults: 'no-content' } });
  }

  /**
   * Este metodo llama imagenes del arreglo de urls
   * se usa para asemejar un carrusel basico
   * @param direction Direccion del carousel
   */
  getPicture(direction: string) {
    const currentIndex = this.pictures.findIndex(x => x.id === this.currentPicture?.id);
    const picturesLength = this.pictures.length - 1;

    if (direction === 'next') {
      if (currentIndex === picturesLength) {
        this.currentPicture = this.pictures[0];
      } else {
        this.currentPicture = this.pictures[currentIndex + 1];
      }
    } else {
      if (currentIndex === 0) {
        this.currentPicture = this.pictures[picturesLength];
      } else {
        this.currentPicture = this.pictures[currentIndex - 1];
      }
    }
  }
}
