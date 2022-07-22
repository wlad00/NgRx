import {createReducer, on} from "@ngrx/store";

// import {LibraryActions} from "@page-editor";
import {BookModel} from "@models-editor";

import * as Workers from './library.workers';
import {LibraryActions} from "@actions-editor";


export interface BookState {
  collection: BookModel[];
  activeBookId: string | null;
}

export const initialState: BookState = {
  collection: [],
  activeBookId: null,
};

export const bookReducer = createReducer(
  initialState,

  /*----------------------------------------------------*/

  on(LibraryActions.clearSelectedBook,
    LibraryActions.enter,
    (state) => {

      return {
        ...state,
        activeBookId: null,
      };
    }),

  on(LibraryActions.selectBook, (state, action) => {

    return {
      ...state,
      activeBookId: action.bookId,
    };
  }),


  /*--- after effect ----------*/


  on(LibraryActions.booksLoaded, (state, action) => {

    return {
      ...state,
      collection: action.books,
    };
  }),

  on(LibraryActions.bookCreated, (state, action) => {

    return {
      collection: Workers.createBook(state.collection, action.book),
      activeBookId: null,
    };
  }),

  on(LibraryActions.bookUpdated, (state, action) => {

    return {
      collection: Workers.updateBook(state.collection, action.book),
      activeBookId: null,
    };
  }),

  on(LibraryActions.bookDeleted, (state, action) => {

    return {
      ...state,
      collection: Workers.deleteBook(state.collection, action.bookId),
    };
  }),
);

