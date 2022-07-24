import { createSelector} from "@ngrx/store";
import {editorPageSelector, StatePageEditor} from "@editor-state";


/**
 * 2. Counter State Selector
 **/
export const counterStateSelector = createSelector(
  editorPageSelector,
  (state: StatePageEditor) => state.loadingState
);



/**
 * 3. Counter All Selectors
 **/


export const getAllDataSelector = createSelector(
  counterStateSelector,
  state => state.data
);

export const dataLoading = createSelector(
  counterStateSelector,
  state => state.dataLoading
);
