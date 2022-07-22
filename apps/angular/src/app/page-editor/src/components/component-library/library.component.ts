import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

// import {LibraryActions} from "@page-editor";
import {BookModel, BookRequiredProps} from "@editor-models";


import {
  selectAllBooks,
  selectActiveBook,
  selectBooksEarningsTotals
} from "../../actions/librarary/library.selectors";
import {LibraryActions} from "@editor-actions";

// import { LibraryActions } from '@editor-actions';

@Component({
  selector: 'editor-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  books$: Observable<BookModel[]>;
  currentBook$: Observable<BookModel | null>;
  total$: Observable<number>;

  constructor(
    private store: Store) {
    this.books$ = store.select(selectAllBooks);
    this.currentBook$ = store.select(selectActiveBook);
    this.total$ = store.select(selectBooksEarningsTotals);
  }

  ngOnInit(): void {
    this.store.dispatch(LibraryActions.enter());

    this.removeSelectedBook();
  }

  /*-----------------------------------------------------*/

  onSelect(book: BookModel) {
    this.store.dispatch(LibraryActions.selectBook({bookId: book.id}));

  }

  onCancel() {
    this.removeSelectedBook();
  }

  removeSelectedBook() {
    this.store.dispatch(LibraryActions.clearSelectedBook());

  }


  onSave(book: BookRequiredProps | BookModel) {
    if ('id' in book) {
      this.updateBook(book);
    } else {
      this.saveBook(book);
    }
  }

  saveBook(bookProps: BookRequiredProps) {
    this.store.dispatch(LibraryActions.createBook({book: bookProps}));

  }

  updateBook(book: BookModel) {
    this.store.dispatch(
      LibraryActions.updateBook({bookId: book.id, changes: book})
    );

  }

  onDelete(book: BookModel) {
    this.store.dispatch(LibraryActions.deleteBook({bookId: book.id}));

  }

}
