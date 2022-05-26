import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './list-items/list-items.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    { path: 'items', component: ListItemsComponent },
    //   { path: 'faq', component: FaqComponent },
    //   { path: 'otros', component: OtrosTramitesComponent },
    { path: '', redirectTo: 'items', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        ListItemsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        // HttpClientOfvService
    ]
})
export class HomeModule { }
