import {createFeatureSelector, createSelector} from "@ngrx/store";
import { StatePageEditor} from "@page-editor";
import * as Workers from './library.workers';




const EditorPageSelector
  = createFeatureSelector<StatePageEditor>('PAGE-EDITOR');
/**
 * 1.  State Selector
 **/

export const libraryStateSelector = createSelector(
  EditorPageSelector,
  (state: StatePageEditor) => state.libraryState
);



/**
 * 2. All Selectors
 **/


/* selectAllBooks */

export const selectAllBooks = createSelector(
  libraryStateSelector,
  Workers.selectAll
);

/* selectActiveBook */

export const selectActiveBook = createSelector(
  libraryStateSelector,
  Workers.selectActiveBook
);

/* selectBooksEarningsTotals */

export const selectBooksEarningsTotals = createSelector(
  libraryStateSelector,
  Workers.selectEarningsTotals
);


