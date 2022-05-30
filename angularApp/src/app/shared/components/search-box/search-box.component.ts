import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Output() searchEmitter = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {
  }

  emitSearch(value: string) {    
    if (value && value !== '') {      
      this.searchEmitter.emit(value);
    } else {
      // void
    }
  }
}
