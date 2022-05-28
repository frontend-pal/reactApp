import {
    CanActivate,
    Router
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionAuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        return true;
    }
}
