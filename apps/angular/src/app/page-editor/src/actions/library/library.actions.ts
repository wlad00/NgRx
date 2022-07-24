import {createAction, props} from '@ngrx/store';

import {BookModel, BookRequiredProps} from "@editor-models";

export const enter = createAction('[LIBRARY] Enter');

export const selectBook = createAction(
  '[LIBRARY] Select Book',
  props<{ bookId: string }>()
);

export const clearSelectedBook = createAction(
  '[LIBRARY] Clear Selected Book'
);

export const createBook = createAction(
  '[LIBRARY] Create Book',
  props<{ book: BookRequiredProps }>()
);

export const updateBook = createAction(
  '[LIBRARY] Update Book',
  props<{ bookId: string; changes: BookRequiredProps }>()
);

export const deleteBook = createAction(
  '[LIBRARY] Delete Book',
  props<{ bookId: string }>()
);
/*---------- -------------- ---------------*/

export const booksLoaded = createAction(
  '[LIBRARY API] Books Loaded Success',
  props<{ books: BookModel[] }>()
);

export const bookCreated = createAction(
  '[LIBRARY API] Book Created',
  props<{ book: BookModel }>()
);

export const bookUpdated = createAction(
  '[LIBRARY API] Book Updated',
  props<{ book: BookModel }>()
);

export const bookDeleted = createAction(
  '[LIBRARY API] Book Deleted',
  props<{ bookId: string }>()
);
