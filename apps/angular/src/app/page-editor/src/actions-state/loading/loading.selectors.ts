import {createFeatureSelector, createSelector} from "@ngrx/store";
import { StatePageEditor} from "@page-editor";


const EditorPageSelector
  = createFeatureSelector<StatePageEditor>('PAGE-EDITOR');
/**
 * 1.  State Selector
 **/

export const counterStateSelector = createSelector(
  EditorPageSelector,
  (state: StatePageEditor) => state.loadingState
);



/**
 * 2. All Selectors
 **/


/* getAllDataSelector */

export const getAllDataSelector = createSelector(
  counterStateSelector,
  state => state.data
);

/* dataLoading */

export const dataLoading = createSelector(
  counterStateSelector,
  state => state.dataLoading
);
