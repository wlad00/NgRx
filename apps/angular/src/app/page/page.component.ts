import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {selectBooksEarningsTotals} from "@book-co/shared-state-books";
import {Store} from "@ngrx/store";

@Component({

  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})



export class PageComponent implements OnInit {
  // total$: Observable<number>;

  constructor( private store: Store) {

    // this.total$ = timeout();

  }

  ngOnInit(): void {
  }

}
