import {createFeatureSelector, createSelector} from "@ngrx/store";
import {StatePageEditor} from "@editor-actions";


const PageSelector
  = createFeatureSelector<StatePageEditor>('PAGE-EDITOR');
/**
 * 1.  State Selector
 **/

const LoadingSelector = createSelector(
  PageSelector,
  (state: StatePageEditor) => state.loadingState
);



/**
 * 2. All Selectors
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
