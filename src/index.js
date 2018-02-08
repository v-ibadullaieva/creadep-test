import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Router, Route, browserHistory } from "react-router";
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
        <Route path="books" component={BooksPage} />
        <Route path="books/:id" component={BookPage} />
        <Route path="authors" component={AuthorsPage} />
        <Route path="authors/:id" component={AuthorPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
