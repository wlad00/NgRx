import {createAction, props} from '@ngrx/store';

import {BookModel, BookRequiredProps} from "@editor-models";



/* --------------- TO REDUCERS --------------------*/

export const selectBook = createAction(
  '[LIBRARY] selectBook *',
  props<{ bookId: string }>()
);

export const clearSelectedBook = createAction(
  '[LIBRARY] clearSelectedBook *'
);

/* ---------- TO REDUCERS + TO EFFECTS ------------*/


/* ---------------- TO EFFECTS --------------------*/

export const enter = createAction('[LIBRARY] enter ->');

export const createBook = createAction(
  '[LIBRARY] createBook -> ',
  props<{ book: BookRequiredProps }>()
);

export const updateBook = createAction(
  '[LIBRARY] updateBook -> ',
  props<{ bookId: string; changes: BookRequiredProps }>()
);

export const deleteBook = createAction(
  '[LIBRARY] deleteBook -> ',
  props<{ bookId: string }>()
);

/*-------------------------------------------------*/
/*---------------- FROM EFFECTS  ------------------*/
/*-------------------------------------------------*/


export const booksLoaded = createAction(
  '[LIBRARY] -> booksLoaded',
  props<{ books: BookModel[] }>()
);


export const bookCreated = createAction(
  '[LIBRARY] -> bookCreated',
  props<{ book: BookModel }>()
);

export const bookUpdated = createAction(
  '[LIBRARY] -> bookUpdated',
  props<{ book: BookModel }>()
);

export const bookDeleted = createAction(
  '[LIBRARY] -> bookDeleted',
  props<{ bookId: string }>()
);
