import { Component, Input, OnInit } from '@angular/core';
import { ProductList } from 'src/app/core/models/product-list';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  showComponent = false;
  @Input() item: ProductList | undefined;

  constructor() { }

  ngOnInit(): void {
    this.showComponent = this.item !== undefined;
  }

  initComponent() {
        
  }

}
