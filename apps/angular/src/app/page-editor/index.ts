

import {ActionReducerMap, createFeatureSelector, createSelector, MetaReducer, StoreModule} from "@ngrx/store";
import {NgModule} from "@angular/core";
import {counterReducer, CounterState} from "./src/actions-state/counter/counter.reducers";
import {bookReducer, BookState} from "./src/actions-state/librarary/library.reducers";
import {loadingReducer, LoadingState} from "./src/actions-state/loading/loading.reducers";


// export const PAGE_EDITOR_KEY = 'PAGE-EDITOR';


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


// export const EditorPageSelector
//   = createFeatureSelector<StatePageEditor>('PAGE-EDITOR');


export const metaReducers: MetaReducer<StatePageEditor>[] = [];


/**
 * Module
 **/
/*
@NgModule({
  imports: [
    StoreModule.forFeature('PAGE-EDITOR', reducers, {metaReducers})],

})
export class ActionsEditorModule {
}
*/
