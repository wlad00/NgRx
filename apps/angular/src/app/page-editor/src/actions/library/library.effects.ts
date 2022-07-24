import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, exhaustMap, map, mergeMap} from 'rxjs/operators';

import {LibraryActions} from "@editor-index";

import {LibraryService} from "./Workers/LibraryService";

@Injectable()
export class LibraryEffects {


  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        LibraryActions.enter),

      exhaustMap(() =>
        this.booksService
          .all()
          .pipe(map((books) =>

            LibraryActions.booksLoaded({books})))
      )
    )
  );

  /*------------------------------------------------------*/

  createBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        LibraryActions.createBook),
      concatMap((action) =>
        this.booksService
          .create(action.book)
          .pipe(map((book) => LibraryActions.bookCreated({book})))
      )
    )
  );
  updateBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        LibraryActions.updateBook),
      concatMap((action) =>
        this.booksService
          .update(action.bookId, action.changes)
          .pipe(map((book) => LibraryActions.bookUpdated({book})))
      )
    )
  );
  deleteBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        LibraryActions.deleteBook),
      mergeMap((action) =>
        this.booksService
          .delete(action.bookId)
          .pipe(
            map(() => LibraryActions.bookDeleted({bookId: action.bookId}))
          )
      )
    )
  );

  constructor(
    private booksService: LibraryService,
    private actions$: Actions) {
  }
}
