import * as api from "../../api";
import { AUTHORS_FETCH_SUCCESS, AUTHOR_FETCH_SUCCESS } from "../../actionTypes";

export const fetchAuthors = () => dispatch =>
  api
    .fetchAuthors()
    .then(authors =>
      dispatch({ type: AUTHORS_FETCH_SUCCESS, payload: authors })
    );

export const fetchAuthor = id => dispatch =>
  api
    .fetchAuthor(id)
    .then(author => dispatch({ type: AUTHOR_FETCH_SUCCESS, payload: author }));
