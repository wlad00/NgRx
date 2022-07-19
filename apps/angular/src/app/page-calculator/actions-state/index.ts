import * as CalculatorActions from './calculator/calculator.actions';
import {calculatorReducer, CalculatorState} from "./calculator/calculator.reducers";
import {ActionReducerMap, MetaReducer, StoreModule} from "@ngrx/store";
import {NgModule} from "@angular/core";


export {CalculatorActions};


export const PAGE_CALCULATOR_KEY = 'PAGE-CALCULATOR';


export interface StatePageCalculator {
  calculatorState: CalculatorState,

}

/*------------------------------------------*/


export const reducers: ActionReducerMap<StatePageCalculator> = {
  calculatorState: calculatorReducer,

};


export const metaReducers: MetaReducer<StatePageCalculator>[] = [];


/**
 * Module
 **/
@NgModule({
  imports: [
    StoreModule.forFeature(PAGE_CALCULATOR_KEY, reducers, {metaReducers})],

})
export class CalculatorModule {
}
