import {createReducer, on} from "@ngrx/store";
import {CounterActions} from "@page-editor/actions-state";


export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0
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
  /*on(changeUpdatedAt, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt
  })),
  on(getDateSuccess, (state, {data}) => ({
    ...state,
    dataLoading: false,
    data
  })),
  on(getData, (state) => ({
    ...state,

    dataLoading: true
  }))*/
);

