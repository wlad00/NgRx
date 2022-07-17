import {NgModule} from '@angular/core';
import {ActionReducerMap, createFeatureSelector, createSelector, MetaReducer, StoreModule,} from '@ngrx/store';
import * as fromBooks from './books.reducer';

export const PAGE_BOOKS_KEY = 'PAGE-BOOKS';

/**
 * State Shape
 **/
export interface State {
  books: fromBooks.State
}

export const reducers: ActionReducerMap<State> = {
  books: fromBooks.reducer
};

export const metaReducers: MetaReducer<State>[] = [];

/**
 * Module
 **/
@NgModule({
  imports: [StoreModule.forFeature(PAGE_BOOKS_KEY, reducers, {metaReducers})],
})
export class SharedStateBooksModule {
}

/**
 * Page Selector
 **/
const selectSharedBooksState = createFeatureSelector<State>(PAGE_BOOKS_KEY);

/**
 * Books Selectors
 */
export const selectBooksState = createSelector(
  selectSharedBooksState,
  (state: State) => state.books
);

export const selectAllBooks = createSelector(
  selectBooksState,
  fromBooks.selectAll
);
export const selectActiveBook = createSelector(
  selectBooksState,
  fromBooks.selectActiveBook
);
export const selectBooksEarningsTotals = createSelector(
  selectBooksState,
  fromBooks.selectEarningsTotals
);
