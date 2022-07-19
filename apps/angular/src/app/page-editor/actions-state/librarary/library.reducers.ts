import {createReducer} from "@ngrx/store";
import {BookModel} from "@book-co/shared-models";


export interface BookState {
  collection: BookModel[];
  activeBookId: string | null;
}

export const initialState: BookState = {
  collection: [],
  activeBookId: null,
};

export const bookReducer = createReducer(
  initialState
);
