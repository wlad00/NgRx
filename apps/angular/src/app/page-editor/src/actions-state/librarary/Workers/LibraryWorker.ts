import {BookModel} from "@models-editor";


export function getActiveBook(
  books: BookModel[],
  activeBookId: string | null
) {
  return books.find((book) =>
    book.id === activeBookId) || null;
}

export function calculateBooksGrossEarnings(books: BookModel[]) {
  return books.reduce((total, book) => {
    return total + parseInt(`${book.earnings}`, 10) || 0;
  }, 0);
}
