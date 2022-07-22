import * as CounterActions from './counter/counter.actions';
import * as LibraryActions from './librarary/library.actions';
import * as LoadingActions from './loading/loading.actions';

import * as CounterSelectors from './counter/counter.selectors';
import * as LibrarySelectors from './librarary/library.selectors';
import * as LoadingSelectors from './loading/loading.selectors';

/*------------------------------------*/

import {ActionReducerMap, StoreModule} from "@ngrx/store";

import {counterReducer, CounterState} from "./counter/counter.reducers";
import {bookReducer, BookState} from "./librarary/library.reducers";
import {loadingReducer, LoadingState} from "./loading/loading.reducers";
import {NgModule} from "@angular/core";

/*---------------------------------------*/

import {EffectsModule} from "@ngrx/effects";
import {LibraryEffects} from "./librarary/library.effects";
import {CounterEffects} from "./counter/counter.effects";
import {LoadingEffects} from "./loading/loading.effects";

/*---------------------------*/

export {CounterActions, LibraryActions, LoadingActions};
export {CounterSelectors,LibrarySelectors,LoadingSelectors};

/*----------------------------*/

export interface StatePageEditor {
  counterState: CounterState;
  libraryState: BookState;
  loadingState: LoadingState;
}

export const reducers: ActionReducerMap<StatePageEditor> = {
  counterState: counterReducer,
  libraryState: bookReducer,
  loadingState: loadingReducer
};

/**
 * ActionsEditorModule
 **/

@NgModule({
  imports: [StoreModule.forFeature('PAGE_EDITOR', reducers)],
})
export class ActionsEditorModule {
}

/**
 * EffectsEditorModule
 **/

@NgModule({
  imports: [
    EffectsModule.forFeature([
      LibraryEffects,
      CounterEffects,
      LoadingEffects
    ])],
})
export class EffectsEditorModule {
}
