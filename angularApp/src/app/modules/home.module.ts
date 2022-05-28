import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './list-items/list-items.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'items', component: ListItemsComponent },
    { path: 'items/:id', component: ProductDetailComponent },    
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        ListItemsComponent,
        ProductDetailComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        // HttpClientOfvService
    ]
})
export class HomeModule { }
