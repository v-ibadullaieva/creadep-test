import * as api from "../../api";
import {
  BOOKS_FETCH_SUCCESS,
  BOOK_FETCH_SUCCESS,
  AUTHOR_BOOKS_FETCH_SUCCESS
} from "../../actionTypes";

export const fetchBooks = () => dispatch =>
  api
    .fetchBooks()
    .then(books => dispatch({ type: BOOKS_FETCH_SUCCESS, payload: books }));

export const fetchBook = id => dispatch =>
  api
    .fetchBook(id)
    .then(book => dispatch({ type: BOOK_FETCH_SUCCESS, payload: book }));

export const fetchAuthorBooks = id => dispatch =>
  api
    .fetchAuthorBooks(id)
    .then(books =>
      dispatch({ type: AUTHOR_BOOKS_FETCH_SUCCESS, payload: { id, books } })
    );
