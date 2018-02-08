import { combineReducers } from "redux";
import booksReducer from "./features/books/reducer";
import authorsReducer from "./features/authors/reducer";

const rootReducer = combineReducers({
  books: booksReducer,
  authors: authorsReducer
});

export default rootReducer;
