import {
  BOOKS_FETCH_SUCCESS,
  BOOK_FETCH_SUCCESS,
  AUTHOR_BOOKS_FETCH_SUCCESS
} from "../../actionTypes";

const initState = {
  books: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case BOOKS_FETCH_SUCCESS: {
      const books = {};
      action.payload.forEach(item => (books[item.id] = item));
      return { ...state, books };
    }
    case BOOK_FETCH_SUCCESS: {
      return {
        ...state,
        books: {
          ...state.books,
          [action.payload.id]: action.payload
        }
      };
    }
    case AUTHOR_BOOKS_FETCH_SUCCESS: {
      const books = {};
      action.payload.books.forEach(book => (books[book.id] = book));
      return {
        ...state,
        books: {
          ...state.books,
          ...books
        }
      };
    }
    default:
      return state;
  }
};
