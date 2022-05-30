import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
    declarations: [
        ProductItemComponent,
        SearchBoxComponent,
        PaginationComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        PaginationComponent,
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
