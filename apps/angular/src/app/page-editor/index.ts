import * as CounterActions from './src/actions/counter/counter.actions';
import * as LibraryActions from './src/actions/librarary/library.actions';
import * as LoadingActions from './src/actions/loading/loading.actions';

import {BookModel, BookRequiredProps} from '@book-co/shared-models';


import {ActionReducerMap, createFeatureSelector, MetaReducer, StoreModule} from "@ngrx/store";
import {NgModule} from "@angular/core";
import {counterReducer, CounterState} from "./src/actions/counter/counter.reducers";
import {bookReducer, BookState} from "./src/actions/librarary/library.reducers";
import {loadingReducer, LoadingState} from "./src/actions/loading/loading.reducers";


export {CounterActions, LibraryActions, LoadingActions};


export const PAGE_EDITOR_KEY = 'PAGE-EDITOR';


export const editorPageSelector
  = createFeatureSelector<StatePageEditor>(PAGE_EDITOR_KEY);


export interface StatePageEditor {
  counterState: CounterState;
  libraryState: BookState;
  loadingState: LoadingState;
}

/*------------------------ - --------  ---------*/


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
