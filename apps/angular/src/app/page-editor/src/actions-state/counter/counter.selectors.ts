import {createFeatureSelector, createSelector} from "@ngrx/store";
import { StatePageEditor} from "@page-editor";


const EditorPageSelector
  = createFeatureSelector<StatePageEditor>('PAGE-EDITOR');

/**
 * 1. Counter State Selector
 **/
export const counterStateSelector = createSelector(
  EditorPageSelector,
  (state: StatePageEditor) => state.counterState
);


/**
 * 2. Counter All Selectors
 **/

/* countSelector */

export const countSelector = createSelector(
  counterStateSelector,
  state => state.count
);

/* updatedAtSelector*/

export const updatedAtSelector = createSelector(
  counterStateSelector,
  state => state.updatedAt
);
