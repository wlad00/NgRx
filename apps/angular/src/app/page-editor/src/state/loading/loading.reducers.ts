import {createReducer, on} from "@ngrx/store";
import {LoadingActions} from "@editor-index";

export interface LoadingState {

  data?: any;
  dataLoading: boolean;
}

export const initialState: LoadingState = {

  dataLoading: false
};

/*---------------- REDUCERS ------------------------*/

export const loadingReducer = createReducer(
  initialState,

  /* getData */

  on(LoadingActions.getData, (state) => ({

    ...state,
    dataLoading: true
  })),


  /*-------------------------------------------------*/
  /*---------------- FROM EFFECTS  ------------------*/
  /*-------------------------------------------------*/

  /* getDateSuccess */

  on(LoadingActions.getDateSuccess, (state, {data}) => ({

    ...state,
    dataLoading: false,
    data: data
  })),
);
