import {createReducer} from "@ngrx/store";


export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0
};

export const counterReducer = createReducer(
  initialState
);
