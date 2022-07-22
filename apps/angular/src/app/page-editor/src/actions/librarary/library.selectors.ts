import {createFeatureSelector, createSelector} from "@ngrx/store";
// import { StatePageEditor} from "@page-editor";
import * as Workers from './library.workers';
import {StatePageEditor} from "@editor-actions";
import {editPageSelector} from "@editor-page";



const PageSelector
  = createFeatureSelector<StatePageEditor>('PAGE-EDITOR');

const LibrarySelector = createSelector(
  editPageSelector,
  (state: StatePageEditor) => state.libraryState
);


/**
 * 2. All Selectors
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


