import {createFeatureSelector, createSelector} from "@ngrx/store";
import {StatePageEditor} from "@editor-actions";
import {editPageSelector} from "@editor-page";


const PageSelector
  = createFeatureSelector<StatePageEditor>('PAGE-EDITOR');
/**
 * 1.  State Selector
 **/

const LoadingSelector = createSelector(
  editPageSelector,
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
