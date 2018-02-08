import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { connect } from "react-redux";
import { fetchBooks } from "../features/books/actions";
import { ListGroup, ListGroupItem } from "reactstrap";

class BooksPage extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <ListGroup>
        {this.props.books.map(book => (
          <ListGroupItem key={book.id}>
            <Link to={`/books/${book.id}`} className="btn-lg">
              {book.title}
            </Link>
            {book.author ? (
              <Link to={`/authors/${book.author.id}`}>{book.author.name}</Link>
            ) : null}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

BooksPage.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      })
    }).isRequired
  ),
  fetchBooks: PropTypes.func.isRequired
};

export default connect(
  state => ({
    books: Object.values(state.books.books)
  }),
  { fetchBooks }
)(BooksPage);
