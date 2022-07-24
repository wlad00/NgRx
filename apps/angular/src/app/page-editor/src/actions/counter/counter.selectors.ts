import {createSelector} from "@ngrx/store";
import {editorPageSelector, StatePageEditor} from "@editor-state";

/**
 * 2. Counter State Selector
 **/
export const counterStateSelector = createSelector(
  editorPageSelector,
  (state: StatePageEditor) => state.counterState
);




/**
 * 3. Counter All Selectors
 **/
export const countSelector = createSelector(
  counterStateSelector,
  state => state.count
);


export const updatedAtSelector = createSelector(
  counterStateSelector,
  state => state.updatedAt
);

