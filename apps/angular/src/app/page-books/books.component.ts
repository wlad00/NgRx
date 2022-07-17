import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";

@Component({

  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})


export class BooksComponent implements OnInit {
  // total$: Observable<number>;

  constructor(private store: Store) {

    // this.total$ = timeout();

  }

  ngOnInit(): void {
  }

}
