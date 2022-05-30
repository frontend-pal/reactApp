import { Component, OnInit } from '@angular/core';
import { Spinkit, SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public spinkit = Spinkit;

  constructor(
    public spinner: SpinnerVisibilityService
  ) {

  }

  ngOnInit(): void {
    // this.spinner.show();
  }
}
