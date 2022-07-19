import {BookState} from "./library.reducers";
import {createSelector} from "@ngrx/store";
import {calculateBooksGrossEarnings} from "../../models/book.model";
import {BookModel} from "@book-co/shared-models";
import * as LibraryService from './Workers/LibraryService';

/* Selectors */

const selectActiveBookId = (state: BookState) => state.activeBookId;

export const selectAll = (state: BookState) => state.collection;

export const selectActiveBook = createSelector(
  selectAll,
  selectActiveBookId,
  LibraryService.getActiveBook
);
export const selectEarningsTotals = createSelector(
  selectAll,
  calculateBooksGrossEarnings
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
