import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '<p> test de componente home</p>'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("entre a home");
  }

}
