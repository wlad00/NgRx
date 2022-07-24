import {createAction, props} from '@ngrx/store';

// export const COUNTER_KEY = 'counter';

export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');
export const clear = createAction('[COUNTER] clear');




export const changeUpdatedAt = createAction(
  '[COUNTER SECOND] changeUpdatedAt',
  props<{ updatedAt: number }>()
);

