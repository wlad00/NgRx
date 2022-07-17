import {Component, OnInit} from '@angular/core';
import {BookModel, BookRequiredProps, calculateBooksGrossEarnings,} from '@book-co/shared-models';
import {BooksService} from '@book-co/shared-services';

@Component({
  selector: 'bco-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponentOld implements OnInit {
  books: BookModel[] = [];
  currentBook: BookModel | null = null;
  total: number = 0;

  constructor(private booksService: BooksService) {
  }

  ngOnInit() {
    this.getBooks();
    this.removeSelectedBook();
  }

  getBooks() {
    this.booksService.all().subscribe((books) => {
      this.books = books;
      this.updateTotals(books);
    });
  }

  updateTotals(books: BookModel[]) {
    this.total = calculateBooksGrossEarnings(books);
  }

  onSelect(book: BookModel) {
    this.currentBook = book;
  }

  onCancel() {
    this.removeSelectedBook();
  }

  removeSelectedBook() {
    this.currentBook = null;
  }

  onSave(book: BookRequiredProps | BookModel) {
    if ('id' in book) {
      this.updateBook(book);
    } else {
      this.saveBook(book);
    }
  }

  saveBook(bookProps: BookRequiredProps) {
    this.booksService.create(bookProps).subscribe(() => {
      this.getBooks();
      this.removeSelectedBook();
    });
  }

  updateBook(book: BookModel) {
    this.booksService.update(book.id, book).subscribe(() => {
      this.getBooks();
      this.removeSelectedBook();
    });
  }

  onDelete(book: BookModel) {
    this.booksService.delete(book.id).subscribe(() => {
      this.getBooks();
      this.removeSelectedBook();
    });
  }
}
