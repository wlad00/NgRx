import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PAGE_CALCULATOR_KEY, StatePageCalculator} from "../index";
// import {PAGE_EDITOR_KEY, StatePageEditor} from "@page-editor/actions-state";
// import {State} from "@book-co/shared-state-books";

/**
 * 1. Page Selector
 **/
export const selectorPage
  = createFeatureSelector<StatePageCalculator>(PAGE_CALCULATOR_KEY);

/**
 * 2. Counter State Selector
 **/
export const selectorState = createSelector(
  selectorPage,
  (state: StatePageCalculator) => state.calculatorState
);

/**
 * 3. Counter All Selectors
 **/
export const calculatorSelector = createSelector(
  selectorState,
  state => state.count
);
/*
export const updatedAtSelector = createSelector(
  featureSelector,
  state => state.updatedAt
);

export const getAllDataSelector = createSelector(
  featureSelector,
  state => state.data
);

export const dataLoading = createSelector(
  featureSelector,
  state => state.dataLoading
);
*/
