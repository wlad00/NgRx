import {createAction, props} from '@ngrx/store';


/* --------------- TO REDUCERS --------------------*/


/* ---------- TO REDUCERS + TO EFFECTS ------------*/

export const increase = createAction('[COUNTER] increase *->');
export const decrease = createAction('[COUNTER] decrease *->');
export const clear = createAction('[COUNTER] clear *->');

/* ---------------- TO EFFECTS --------------------*/


/*-------------------------------------------------*/
/*---------------- FROM EFFECTS  ------------------*/
/*-------------------------------------------------*/


export const changeUpdatedAt = createAction(
  '[COUNTER] -> changeUpdatedAt',
  props<{ updatedAt: number }>()
);
