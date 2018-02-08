import {
  AUTHORS_FETCH_SUCCESS,
  AUTHOR_FETCH_SUCCESS,
  AUTHOR_BOOKS_FETCH_SUCCESS
} from "../../actionTypes";

const initState = {
  authors: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case AUTHORS_FETCH_SUCCESS: {
      const authors = {};
      action.payload.forEach(
        item => (authors[item.id] = { books: [], ...item })
      );
      return { ...state, authors };
    }
    case AUTHOR_FETCH_SUCCESS: {
      return {
        ...state,
        authors: {
          ...state.authors,
          [action.payload.id]: {
            books: [],
            ...state.authors[action.payload.id],
            ...action.payload
          }
        }
      };
    }
    case AUTHOR_BOOKS_FETCH_SUCCESS: {
      const booksIds = action.payload.books.map(book => book.id);
      return {
        ...state,
        authors: {
          ...state.authors,
          [action.payload.id]: {
            ...state.authors[action.payload.id],
            books: booksIds
          }
        }
      };
    }
    default:
      return state;
  }
};
