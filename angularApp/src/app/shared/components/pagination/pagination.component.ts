import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Paging } from 'src/app/core/models/search-response';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
  @Input() paginationData!: Paging;
  @Output() offsetEmitter: EventEmitter<number> = new EventEmitter();
  currentPage: number = 0;
  totalItems: number = 0;
  totalPages: number = 0;

  constructor() { }

  ngOnChanges() {
    if (this.paginationData !== undefined) {
      this.updatePaging();
    }
  }

  /**
   * Este metodo actualiza los valores de la paginación
   * seún la respuesta del paging mas actualizado.
   */
  updatePaging() {
    this.totalItems = this.paginationData?.total;
    this.totalPages = Math.ceil(this.totalItems / this.paginationData?.limit);
    
    if (this.paginationData?.offset === 0) {
      this.currentPage = 1;
    } else {
      this.currentPage = Math.ceil(this.paginationData?.offset / this.paginationData?.limit)
    }
  }

  /**
   * Este metodo emite el valor del offset
   * si el valor actual es 0 emite 5
   * si el valor es diferente emite el valor actual mas el limite
   */
  nextOffset() {
    const nextOffset = this.paginationData?.offset === 0 ? 5 : this.paginationData?.offset + this.paginationData.limit;

    this.offsetEmitter.emit(nextOffset);
  }

  /**
   * Este metodo emite el valor del offset
   * si el valor es menor al limite emite 0
   * si el valor es mayor al limite emite el valor actual menos el valor del limite
   */
  previousOffset() {
    const nextOffset = this.paginationData?.offset <= this.paginationData.limit + 1 ? 0 : this.paginationData?.offset - 4;

    this.offsetEmitter.emit(nextOffset);
  }

}
