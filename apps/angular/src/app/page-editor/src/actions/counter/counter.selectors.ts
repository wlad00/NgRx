import {createFeatureSelector, createSelector} from "@ngrx/store";
import {StatePageEditor} from "@editor-actions";
import {editPageSelector} from "@editor-page";




const CounterSelector = createSelector(
  editPageSelector,
  (state: StatePageEditor) => state.counterState
);


/**
 *  All selectors
 **/

/* countSelector */

export const countSelector = createSelector(
  CounterSelector,
  state => state.count
);

/* updatedAtSelector*/

export const updatedAtSelector = createSelector(
  CounterSelector,
  state => state.updatedAt
);
