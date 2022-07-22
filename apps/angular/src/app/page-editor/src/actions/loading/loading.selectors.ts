import {createFeatureSelector, createSelector} from "@ngrx/store";
import { StatePageEditor} from "@page-editor";


const PageSelector
  = createFeatureSelector<StatePageEditor>('PAGE-EDITOR');
/**
 * 1.  State Selector
 **/

export const StateSelector = createSelector(
  PageSelector,
  (state: StatePageEditor) => state.loadingState
);



/**
 * 2. All Selectors
 **/


/* getAllDataSelector */

export const getAllDataSelector = createSelector(
  StateSelector,
  state => state.data
);

/* dataLoading */

export const dataLoading = createSelector(
  StateSelector,
  state => state.dataLoading
);
