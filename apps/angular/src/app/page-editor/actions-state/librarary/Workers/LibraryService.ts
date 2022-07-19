import {BookModel} from "../../../models/book.model";


export function getActiveBook(
  books: BookModel[],
  activeBookId: string | null
) {
  return books.find((book) =>
    book.id === activeBookId) || null;
}
