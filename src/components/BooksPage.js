import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { fetchBooks } from "../features/books/actions";

class BooksPage extends Component {
  componentDidMount() {
    this.props.fetchBooks();
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Link to="books/item">Title</Link>
        <Link to="author">Author</Link>
      </div>
    );
  }
}

export default connect(
  state => ({
    books: state.app.books
  }),
  { fetchBooks }
)(BooksPage);
