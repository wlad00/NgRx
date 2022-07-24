import { createSelector} from "@ngrx/store";
import {editorPageSelector, StatePageEditor} from "@editor-state";
import * as Workers from './library.workers';

/**
 * 2. Counter State Selector
 **/
export const LibrarySelector = createSelector(
  editorPageSelector,
  (state: StatePageEditor) => state.libraryState
);


/**
 * 3. Counter All Selectors
 **/

/* selectAllBooks */

export const selectAllBooks = createSelector(
  LibrarySelector,
  Workers.selectAll
);

/* selectActiveBook */

export const selectActiveBook = createSelector(
  LibrarySelector,
  Workers.selectActiveBook
);

/* selectBooksEarningsTotals */

export const selectBooksEarningsTotals = createSelector(
  LibrarySelector,
  Workers.selectEarningsTotals
);


