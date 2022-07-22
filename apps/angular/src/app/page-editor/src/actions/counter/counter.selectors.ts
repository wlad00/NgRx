import {createFeatureSelector, createSelector} from "@ngrx/store";
import { StatePageEditor} from "@page-editor";


const PageSelector
  = createFeatureSelector<StatePageEditor>('PAGE-EDITOR');

/**
 * 1. Counter State Selector
 **/
export const StateSelector = createSelector(
  PageSelector,
  (state: StatePageEditor) => state.counterState
);


/**
 * 2. Counter All Selectors
 **/

/* countSelector */

export const countSelector = createSelector(
  StateSelector,
  state => state.count
);

/* updatedAtSelector*/

export const updatedAtSelector = createSelector(
  StateSelector,
  state => state.updatedAt
);
