import {createReducer, on} from "@ngrx/store";
import {CounterActions} from "@page-editor";

export interface CounterState {
  count: number;
  updatedAt?: number;
  data?: any;
  dataLoading: boolean;
}

export const initialState: CounterState = {
  count: 0,
  dataLoading: false
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


 /* on(CounterActions.getData, (state) => ({
    ...state,

    dataLoading: true
  })),*/

  /* --------- from effect -----------*/

  on(CounterActions.changeUpdatedAt, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt
  })),

  /*on(CounterActions.getDateSuccess, (state, {data}) => ({
    ...state,
    dataLoading: false,
    data: data
  })),*/
);

