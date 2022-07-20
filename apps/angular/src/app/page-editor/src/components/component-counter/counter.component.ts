import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterActions, LoadingActions} from "@page-editor";
import {
  countSelector,
  updatedAtSelector
} from "../../actions-state/counter/counter.selectors";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {dataLoading, getAllDataSelector} from "../../actions-api/loading/loading.selectors";
// import {countSelector} from "../../actions-state/counter/counter.selectors";

// import {clear, decrease, increase} from "../state/count/count.actions";


@Component({
  selector: 'editor-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  // updatedAt?: number;

  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0));
  updatedAt$ = this.store.select(updatedAtSelector);

  dataLoading$: Observable<boolean>;

  constructor(private store: Store) {

    this.dataLoading$ = this.store.select(dataLoading);

  }


  /*get cannotDecrease(): boolean {


    return false;
  }*/

  increase(): void {
    // this.updatedAt = Date.now();

    this.store.dispatch(CounterActions.increase());
  }

  decrease(): void {
    // this.updatedAt = Date.now();

    this.store.dispatch(CounterActions.decrease());
  }

  clear(): void {
    // this.updatedAt = Date.now();

    this.store.dispatch(CounterActions.clear());
  }

  getMovies(): void {
    this.store.dispatch(LoadingActions.getData());
  }


  ngOnInit(): void {
    this.store
      .select(getAllDataSelector)
      .subscribe((data) => console.log(data));
  }

}
