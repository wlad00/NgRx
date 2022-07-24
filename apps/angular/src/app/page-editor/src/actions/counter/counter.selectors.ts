import {createSelector} from "@ngrx/store";
import {editorPageSelector, StatePageEditor} from "@editor-state";

/**
 * 2. Counter State Selector
 **/
export const CounterSelector = createSelector(
  editorPageSelector,
  (state: StatePageEditor) => state.counterState
);




/**
 * 3. Counter All Selectors
 **/

/* countSelector */

export const countSelector = createSelector(
  CounterSelector,
  state => state.count
);

/* updatedAtSelector */

export const updatedAtSelector = createSelector(
  CounterSelector,
  state => state.updatedAt
);

