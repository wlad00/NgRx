import {Component, OnInit} from '@angular/core';
// import {BooksService} from "@book-co/shared-services";
// import {BookModel, calculateBooksGrossEarnings} from "@book-co/shared-models";
import {BookModel, BookRequiredProps, calculateBooksGrossEarnings} from "../models/book.model";
import {Store} from "@ngrx/store";
import {LibraryActions} from "@page-editor/actions-state";
import {Observable} from "rxjs";
import {
  selectActiveBook,
  selectAllBooks,
  selectBooksEarningsTotals
} from "../actions-state/librarary/library.selectors";

@Component({
  selector: 'editor-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  books: BookModel[] = [];
  currentBook: BookModel | null = null;
  total: number = 0;
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

    // this.getBooks();
    this.removeSelectedBook();
  }

  /*-----------------------------------------------------*/

  onSelect(book: BookModel) {
    this.store.dispatch(LibraryActions.selectBook({bookId: book.id}));

    this.currentBook = book;
  }

  onCancel() {
    this.removeSelectedBook();
  }

  removeSelectedBook() {
    this.store.dispatch(LibraryActions.clearSelectedBook());

    this.currentBook = null;
  }


  /*-----------------------------------------------------*/


  /* getBooks() {
     this.booksService.all().subscribe((books) => {

       this.store.dispatch(LibraryActions.booksLoaded({books}));

       this.books = books;
       this.updateTotals(books);
     });
   }*/

  updateTotals(books: BookModel[]) {
    this.total = calculateBooksGrossEarnings(books);
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

    /*this.booksService.create(bookProps).subscribe(() => {
      // this.getBooks();
      this.removeSelectedBook();
    });*/
  }

  updateBook(book: BookModel) {
    this.store.dispatch(
      LibraryActions.updateBook({bookId: book.id, changes: book})
    );

    /* this.booksService.update(book.id, book).subscribe(() => {
       // this.getBooks();
       this.removeSelectedBook();
     });*/
  }

  onDelete(book: BookModel) {
    this.store.dispatch(LibraryActions.deleteBook({bookId: book.id}));

    /*this.booksService.delete(book.id).subscribe(() => {
      // this.getBooks();
      this.removeSelectedBook();
    });*/
  }

}
