import { createSelector} from "@ngrx/store";
import {editorPageSelector, StatePageEditor} from "@editor-state";


/**
 * 2.  State Selector
 **/
export const LoadingSelector = createSelector(
  editorPageSelector,
  (state: StatePageEditor) => state.loadingState
);



/**
 * 3. All Selectors
 **/


/* getAllDataSelector  */

export const getAllDataSelector = createSelector(
  LoadingSelector,
  state => state.data
);

/* dataLoading */

export const dataLoading = createSelector(
  LoadingSelector,
  state => state.dataLoading
);
