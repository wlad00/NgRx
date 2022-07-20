import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PAGE_EDITOR_KEY, StatePageEditor} from "@page-editor";
import * as Workers from './library.workers';

/**
 * 1. Page Selector
 **/
export const featurePageSelector
  = createFeatureSelector<StatePageEditor>(PAGE_EDITOR_KEY);

/**
 * 2. Counter State Selector
 **/
export const libraryStateSelector = createSelector(
  featurePageSelector,
  (state: StatePageEditor) => state.libraryState
);

/**
 * 3. Counter All Selectors
 **/
export const selectAllBooks = createSelector(
  libraryStateSelector,
  Workers.selectAll
);
export const selectActiveBook = createSelector(
  libraryStateSelector,
  Workers.selectActiveBook
);
export const selectBooksEarningsTotals = createSelector(
  libraryStateSelector,
  Workers.selectEarningsTotals
);

/**
 *
 * */

