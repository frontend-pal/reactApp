import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit(): void {
        // void
        console.log("entre a componente layout");
    }

    ngOnDestroy(): void {
        // void
    }
}
