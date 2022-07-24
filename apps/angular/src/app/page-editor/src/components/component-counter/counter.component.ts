import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterActions, CounterSelectors, LoadingActions, LoadingSelectors} from "@editor-index";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";


@Component({
  selector: 'editor-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$ = this.store.select(CounterSelectors.countSelector);
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0));
  updatedAt$ = this.store.select(CounterSelectors.updatedAtSelector);

  dataLoading$: Observable<boolean>;

  constructor(private store: Store) {

    this.dataLoading$ = this.store.select(LoadingSelectors.dataLoading);

  }


  increase(): void {

    this.store.dispatch(CounterActions.increase());
  }

  decrease(): void {

    this.store.dispatch(CounterActions.decrease());
  }

  clear(): void {

    this.store.dispatch(CounterActions.clear());
  }

  getMovies(): void {
    this.store.dispatch(LoadingActions.getData());
  }


  ngOnInit(): void {
    this.store
      .select(LoadingSelectors.getAllDataSelector)
      .subscribe((data) => console.log(data));
  }

}
