import * as CounterActions from './counter/counter.actions';
import {ActionReducerMap, MetaReducer, StoreModule} from "@ngrx/store";
import {counterReducer, CounterState} from "./counter/counter.reducers";
import {NgModule} from "@angular/core";


export {CounterActions};


export const PAGE_COUNTER_KEY = 'page_counter';


export interface State {
  counter: CounterState;
}

/*------------------------------------------*/


export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
};


export const metaReducers: MetaReducer<State>[] = [];


/**
 * Module
 **/
@NgModule({
  imports: [
    StoreModule.forFeature(PAGE_COUNTER_KEY, reducers, {metaReducers})],

})
export class CounterModule {
}
