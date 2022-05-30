import { Routes } from '@angular/router';
import { SessionAuthGuard } from '../core/guards/session-auth.guard';
import { LayoutComponent } from '../layout/layout.component';

// exportamos una contante de rutas
// se utiliza la ultima tecnica de lazy loading
// para recibir el modulo como una promea
// a su vez este modulo tiene sus rutas internas y el layout contendor del app
export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [SessionAuthGuard],
        children: [            
            { path: '', loadChildren: () => import('../modules/home.module').then(m => m.HomeModule) },
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ]
    }
];