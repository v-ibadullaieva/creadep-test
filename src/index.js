import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import BooksPage from "./components/BooksPage";
import BookPage from "./components/BookPage";
import AuthorsPage from "./components/AuthorsPage";
import AuthorPage from "./components/AuthorPage";

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={BooksPage} />
				<Route path="books/:id" component={BookPage} />
				<Route path="authors" component={AuthorsPage} />
				<Route path="author/:id" component={AuthorPage} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById("root")
);

registerServiceWorker();
