import * as CounterActions from './src/actions-state/counter/counter.actions';
import * as LibraryActions from './src/actions-state/librarary/library.actions';

import {BookModel, BookRequiredProps} from '@book-co/shared-models';


import {ActionReducerMap, MetaReducer, StoreModule} from "@ngrx/store";
// import {counterReducer, CounterState} from "./actions-state/counter/counter.reducers";
// import {bookReducer, BookState} from "./actions-state/librarary/library.reducers";
import {NgModule} from "@angular/core";
import {counterReducer, CounterState} from "./src/actions-state/counter/counter.reducers";
import {bookReducer, BookState} from "./src/actions-state/librarary/library.reducers";



export {CounterActions, LibraryActions};



export const PAGE_EDITOR_KEY = 'PAGE-EDITOR';


export interface StatePageEditor {
  counterState: CounterState;
  libraryState: BookState;
}

/*------------------------- -------- ---------*/


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
export class ActionsEditorModule {
}
