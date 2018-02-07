import { combineReducers } from "redux";
import booksReducer from "./features/books/reducer";

const rootReducer = combineReducers({
	app: booksReducer
});

export default rootReducer;
