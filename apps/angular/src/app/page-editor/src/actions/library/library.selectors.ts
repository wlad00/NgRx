import { createSelector} from "@ngrx/store";
import {editorPageSelector, StatePageEditor} from "@editor-state";
import * as Workers from './library.workers';

/**
 * 2. Counter State Selector
 **/
export const libraryStateSelector = createSelector(
  editorPageSelector,
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


