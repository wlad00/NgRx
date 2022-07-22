import {createFeatureSelector, createSelector} from "@ngrx/store";
import { StatePageEditor} from "@page-editor";
import * as Workers from './library.workers';




const PageSelector
  = createFeatureSelector<StatePageEditor>('PAGE-EDITOR');
/**
 * 1.  State Selector
 **/

export const StateSelector = createSelector(
  PageSelector,
  (state: StatePageEditor) => state.libraryState
);



/**
 * 2. All Selectors
 **/


/* selectAllBooks */

export const selectAllBooks = createSelector(
  StateSelector,
  Workers.selectAll
);

/* selectActiveBook */

export const selectActiveBook = createSelector(
  StateSelector,
  Workers.selectActiveBook
);

/* selectBooksEarningsTotals */

export const selectBooksEarningsTotals = createSelector(
  StateSelector,
  Workers.selectEarningsTotals
);


