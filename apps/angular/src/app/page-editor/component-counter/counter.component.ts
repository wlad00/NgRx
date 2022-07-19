import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterActions} from "@page-editor/actions-state";
import {countSelector} from "../actions-state/counter/counter.selectors";
import {map} from "rxjs/operators";

// import {clear, decrease, increase} from "../state/count/count.actions";


@Component({
  selector: 'editor-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  updatedAt?: number;

  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0));

  constructor(private store: Store) {


  }


  /*get cannotDecrease(): boolean {


    return false;
  }*/

  increase(): void {
    this.updatedAt = Date.now();

    this.store.dispatch(CounterActions.increase());
  }

  decrease(): void {
    this.updatedAt = Date.now();

    this.store.dispatch(CounterActions.decrease());
  }

  clear(): void {
    this.updatedAt = Date.now();

    this.store.dispatch(CounterActions.clear());
  }

}
