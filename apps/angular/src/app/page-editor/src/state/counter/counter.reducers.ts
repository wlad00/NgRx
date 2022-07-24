import {createReducer, on} from "@ngrx/store";
import {CounterActions} from "@editor-index";

export interface CounterState {
  count: number;
  updatedAt?: number;
}

export const initialState: CounterState = {
  count: 0,
};

/*------------- + REDUCERS --------------------------*/

export const counterReducer = createReducer(
  initialState,

  /* increase + */

  on(CounterActions.increase, state => ({
    ...state,
    count: state.count + 1
  })),

  /* decrease + */

  on(CounterActions.decrease, state => ({
    ...state,
    count: state.count - 1
  })),

  /* clear + */

  on(CounterActions.clear, state => ({
    ...state,
    count: 0
  })),


  /*-------------------------------------------------*/
  /*--------------- -> FROM EFFECTS  ------------------*/
  /*-------------------------------------------------*/

  /* -> changeUpdatedAt */

  on(CounterActions.changeUpdatedAt, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt
  })),

);

