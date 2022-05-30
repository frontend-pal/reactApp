import {
    CanActivate,
    Router
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionAuthGuard implements CanActivate {
    constructor(private router: Router) { }

    /***
     * Este metodo devuelve true siempre
     * no tenemos logica de token ni de seguridad
     * archivo creado con fines de arquitectura de frontend
     */
    canActivate() {
        return true;
    }
}
