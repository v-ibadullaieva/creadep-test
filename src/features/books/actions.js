import * as api from "../../api";

export const BOOKS_FETCH_SUCCESS = "BOOKS_FETCH_SUCCESS";

export const fetchBooks = () => dispatch =>
  api
    .fetchBooks()
    .then(books => dispatch({ type: BOOKS_FETCH_SUCCESS, payload: books }));
