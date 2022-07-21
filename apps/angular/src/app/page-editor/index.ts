import * as CounterActions from './src/actions-state/counter/counter.actions';
import * as LibraryActions from './src/actions-state/librarary/library.actions';
import * as LoadingActions from './src/actions-api/loading/loading.actions';

import * as CounterSelectors from './src/actions-state/counter/counter.selectors';
import * as LibrarySelectors from './src/actions-state/librarary/library.selectors';
import * as LoadingSelectors from './src/actions-api/loading/loading.selectors';

import {BookModel, BookRequiredProps} from '@book-co/shared-models';


import {ActionReducerMap, createFeatureSelector, MetaReducer, StoreModule} from "@ngrx/store";
// import {counterReducer, CounterState} from "./actions-state/counter/counter.reducers";
// import {bookReducer, BookState} from "./actions-state/librarary/library.reducers";
import {NgModule} from "@angular/core";
import {counterReducer, CounterState} from "./src/actions-state/counter/counter.reducers";
import {bookReducer, BookState} from "./src/actions-state/librarary/library.reducers";
import {loadingReducer, LoadingState} from "./src/actions-api/loading/loading.reducers";



export {CounterActions, LibraryActions, LoadingActions};
export {CounterSelectors, LibrarySelectors, LoadingSelectors};



export const PAGE_EDITOR_KEY = 'PAGE-EDITOR';


export const editorPageSelector
  = createFeatureSelector<StatePageEditor>(PAGE_EDITOR_KEY);


export interface StatePageEditor {
  counterState: CounterState;
  libraryState: BookState;
  loadingState: LoadingState;
}

/*------------------------ - -------- ---------*/


export const reducers: ActionReducerMap<StatePageEditor> = {
  counterState: counterReducer,
  libraryState: bookReducer,
  loadingState: loadingReducer
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
