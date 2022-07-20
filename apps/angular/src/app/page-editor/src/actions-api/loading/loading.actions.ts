import {createAction, props} from "@ngrx/store";



export const getData = createAction('[LOADING API] getData');




/* Actions in Effects */

export const getDateSuccess = createAction(
  '[LOADING API] getDataSuccess',
  props<{ data: any }>()
);
