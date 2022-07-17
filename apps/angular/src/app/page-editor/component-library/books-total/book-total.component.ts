import {Component, Input} from "@angular/core";

@Component({
  selector: 'bc-book-total',
  templateUrl: './book-total.component.html'
})
export class BookTotalComponent {
  @Input() total: number | null = 0;
}
