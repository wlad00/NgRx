import * as CounterActions from './counter/counter.actions';
import * as LibraryActions from './librarary/library.actions';

import {ActionReducerMap, MetaReducer, StoreModule} from "@ngrx/store";
import {counterReducer, CounterState} from "./counter/counter.reducers";
import {NgModule} from "@angular/core";
import {bookReducer, BookState} from "./librarary/library.reducers";

/*import * as BooksApiActions from './lib/books-api.actions';
import * as BooksPageActions from './lib/books-page.actions';

export { BooksApiActions, BooksPageActions };*/


export {CounterActions, LibraryActions};


export const PAGE_EDITOR_KEY = 'PAGE-EDITOR';


export interface StatePageEditor {
  counterState: CounterState;
  libraryState: BookState;
}

/*------------------------------------------*/


export const reducers: ActionReducerMap<StatePageEditor> = {
  counterState: counterReducer,
  libraryState: bookReducer,
};


export const metaReducers: MetaReducer<StatePageEditor>[] = [];


/**
 * Module
 **/
@NgModule({
  imports: [
    StoreModule.forFeature(PAGE_EDITOR_KEY, reducers, {metaReducers})],

})
export class CounterModule {
}
