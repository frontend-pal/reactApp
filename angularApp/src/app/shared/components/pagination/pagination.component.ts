import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Paging } from 'src/app/core/models/search-response';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() paginationData!: Paging;
  @Output() offsetEmitter: EventEmitter<number> = new EventEmitter();
  currentPage: number = 0;
  totalItems: number = 0;
  totalPages: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.paginationData);
  }

  ngOnChanges() {
    console.log(this.paginationData);
    if (this.paginationData !== undefined) {
      this.updatePaging();
    }
  }

  updatePaging() {
    this.totalItems = this.paginationData?.total;
    this.totalPages = Math.ceil(this.totalItems / this.paginationData?.limit);
    
    if (this.paginationData?.offset === 0) {
      this.currentPage = 1;
    } else {
      this.currentPage = Math.ceil(this.paginationData?.offset / this.paginationData?.limit)
    }
  }

  nextOffset() {
    const nextOffset = this.paginationData?.offset === 0 ? 5 : this.paginationData?.offset + 4;

    this.offsetEmitter.emit(nextOffset);
  }

  previouesOffset() {
    const nextOffset = this.paginationData?.offset <= this.paginationData.limit + 1 ? 0 : this.paginationData?.offset - 4;

    this.offsetEmitter.emit(nextOffset);
  }

}
