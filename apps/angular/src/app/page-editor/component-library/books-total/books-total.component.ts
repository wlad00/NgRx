import {Component, Input} from '@angular/core';

@Component({
  selector: 'bco-book-total',
  templateUrl: './books-total.component.html'
})
export class BookTotalComponent {
  @Input() total: number | null = 0;
}
