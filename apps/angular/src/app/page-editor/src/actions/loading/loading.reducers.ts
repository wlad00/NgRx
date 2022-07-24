import {createReducer, on} from "@ngrx/store";
import {LoadingActions} from "@editor-index";

export interface LoadingState {

  data?: any;
  dataLoading: boolean;
}

export const initialState: LoadingState = {

  dataLoading: false
};


export const loadingReducer = createReducer(
  initialState,

  on(LoadingActions.getData, (state) => ({

    ...state,
    dataLoading: true
  })),

  /* --------- from effect -----------*/


  on(LoadingActions.getDateSuccess, (state, {data}) => ({

    ...state,
    dataLoading: false,
    data: data
  })),
);

