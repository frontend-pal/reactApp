import { Routes } from '@angular/router';
import { SessionAuthGuard } from '../core/guards/session-auth.guard';
import { LayoutComponent } from '../layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [SessionAuthGuard],
        children: [            
            { path: '', loadChildren: () => import('../modules/home.module').then(m => m.HomeModule) },
            { path: '', redirectTo: '', pathMatch: 'full' }
        ]
    },

    // ruta 404
    // { path: '**', redirectTo: 'items', pathMatch: 'full' }

];