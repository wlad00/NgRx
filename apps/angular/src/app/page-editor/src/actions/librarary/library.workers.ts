import {BookState} from "./library.reducers";
import {createSelector} from "@ngrx/store";

// import {BookModel} from "@book-co/shared-models";
import * as LibraryWorker from './Workers/LibraryWorker';
import {BookModel} from "@editor-models";

/* Selectors */

const selectActiveBookId = (state: BookState) => state.activeBookId;

export const selectAll = (state: BookState) => state.collection;

export const selectActiveBook = createSelector(
  selectAll,
  selectActiveBookId,
  LibraryWorker.getActiveBook
);
export const selectEarningsTotals = createSelector(
  selectAll,
  LibraryWorker.calculateBooksGrossEarnings
);

/*  Reducers */

export const updateBook = (books: BookModel[], changes: BookModel) =>

  books.map((book) => {
    return book.id === changes.id ?
      Object.assign({}, book, changes) : book;
  });

export const createBook = (books: BookModel[], book: BookModel) =>

  [...books, book];

export const deleteBook = (books: BookModel[], bookId: string) =>

  books.filter((book) => bookId !== book.id);
