import {createAction, props} from "@ngrx/store";


/* --------------- TO REDUCERS --------------------*/


/* ---------- TO REDUCERS + TO EFFECTS ------------*/

export const getData = createAction('[LOADING] getData *->');

/* ---------------- TO EFFECTS --------------------*/


/*-------------------------------------------------*/
/*---------------- FROM EFFECTS  ------------------*/
/*-------------------------------------------------*/

export const getDateSuccess = createAction(
  '[LOADING] -> getDataSuccess',
  props<{ data: any }>()
);
