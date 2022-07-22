import {createFeatureSelector, createSelector} from "@ngrx/store";
import {StatePageEditor} from "@editor-actions";


export const PageSelector
  = createFeatureSelector<StatePageEditor>('PAGE-EDITOR');

const CounterSelector = createSelector(
  PageSelector,
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
