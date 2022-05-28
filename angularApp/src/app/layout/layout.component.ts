import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        // void
    }

    sendSearch(search: string) {
        const query = encodeURI(search);

        this.router.navigate(['/items'], { queryParams: { search: query } });
    }
}
