import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {CalculatorActions} from "./actions-state";
import {calculatorSelector} from "./actions-state/calculator/calculator.selectors";
import {map} from "rxjs/operators";

@Component({
  selector: 'book-co-page-counter',
  templateUrl: './page-calculator.component.html',
  styleUrls: ['./page-calculator.component.scss']
})
export class PageCalculatorComponent {
  updatedAt?: number;

  count$ = this.store.select(calculatorSelector);
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0));

  constructor(private store: Store) {
  }


  get cannotDecrease(): boolean {

    // return this.counter <= 0;

    return false;
  }

  increase(): void {
    this.updatedAt = Date.now();

    this.store.dispatch(CalculatorActions.increase());
  }

  decrease(): void {
    this.updatedAt = Date.now();

    this.store.dispatch(CalculatorActions.decrease());
  }

  clear(): void {
    this.updatedAt = Date.now();

    this.store.dispatch(CalculatorActions.clear());
  }

}
