import {createReducer, on} from "@ngrx/store";
import {CounterActions} from "@editor-index";

export interface CounterState {
  count: number;
  updatedAt?: number;

}

export const initialState: CounterState = {
  count: 0,

};


export const counterReducer = createReducer(
  initialState,

  /*--------------  3-й Этап ------------------------------*/

  on(CounterActions.increase, state => ({
    ...state,
    count: state.count + 1
  })),
  on(CounterActions.decrease, state => ({
    ...state,
    count: state.count - 1
  })),
  on(CounterActions.clear, state => ({
    ...state,
    count: 0
  })),


  on(CounterActions.changeUpdatedAt, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt
  })),

);

