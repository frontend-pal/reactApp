import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ProductItemComponent,
        SearchBoxComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ProductItemComponent,
        SearchBoxComponent,
        RouterModule
    ],
    providers: [
        DatePipe,
        CurrencyPipe
    ]
})
export class SharedModule { }
