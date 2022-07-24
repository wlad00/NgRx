
import {ActionReducerMap, createFeatureSelector, MetaReducer, StoreModule} from "@ngrx/store";
import {NgModule} from "@angular/core";
import {counterReducer, CounterState} from "./counter/counter.reducers";
import {bookReducer, BookState} from "./library/library.reducers";
import {loadingReducer, LoadingState} from "./loading/loading.reducers";


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
