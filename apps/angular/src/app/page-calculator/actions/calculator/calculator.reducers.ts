import {createReducer, on} from "@ngrx/store";
import {CalculatorActions} from "../index";


export interface CalculatorState {
  count: number;
}

export const initialState: CalculatorState = {
  count: 0
};


export const calculatorReducer = createReducer(
  initialState,

  /*------------------  3-й Этап -----------------------------*/


  on(CalculatorActions.increase, state => ({
    ...state,
    count: state.count + 1
  })),
  on(CalculatorActions.decrease, state => ({
    ...state,
    count: state.count - 1
  })),
  on(CalculatorActions.clear, state => ({
    ...state,
    count: 0
  })),
  /*on(CalculatorActions.changeUpdatedAt, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt
  })),
  on(CalculatorActions.getDateSuccess, (state, {data}) => ({
    ...state,
    dataLoading: false,
    data
  })),
  on(CalculatorActions.getData, (state) => ({
    ...state,

    dataLoading: true
  }))*/
);
