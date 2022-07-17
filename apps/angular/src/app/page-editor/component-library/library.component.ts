import {Component, OnInit} from '@angular/core';
import {BooksService} from "@book-co/shared-services";
import {BookModel, calculateBooksGrossEarnings} from "@book-co/shared-models";

@Component({
  selector: 'editor-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  total: number = 0;
  books: BookModel[] = [];

  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {

    this.getBooks();

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

}
