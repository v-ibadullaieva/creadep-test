import { BOOKS_FETCH_SUCCESS } from "./actions";

const initState = {
  books: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case BOOKS_FETCH_SUCCESS: {
      return {
        ...state,
        movies: action.payload
      };
    }
    default:
      return state;
  }
};
