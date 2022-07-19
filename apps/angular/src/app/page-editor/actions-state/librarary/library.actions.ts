import {createAction, props} from '@ngrx/store';
import {BookRequiredProps} from '@book-co/shared-models';

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
