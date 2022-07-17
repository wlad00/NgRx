import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterActions} from "@page-editor/actions-state";

// import {clear, decrease, increase} from "../state/count/count.actions";


@Component({
  selector: 'editor-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter = 0;
  updatedAt?: number;

  constructor(private store: Store) {


  }


  get cannotDecrease(): boolean {

    return this.counter <= 0;
  }

  increase(): void {
    this.updatedAt = Date.now();
    this.counter++;
    this.store.dispatch(CounterActions.increase());
  }

  decrease(): void {
    this.updatedAt = Date.now();
    this.counter--;
    this.store.dispatch(CounterActions.decrease());
  }

  clear(): void {
    this.updatedAt = Date.now();
    this.counter = 0;
    this.store.dispatch(CounterActions.clear());
  }

}
