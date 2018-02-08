import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { connect } from "react-redux";
import { Card, CardText, CardTitle } from "reactstrap";
import { fetchAuthor } from "../features/authors/actions";
import { fetchAuthorBooks } from "../features/books/actions";

class AuthorPage extends Component {
  componentDidMount() {
    this.props.fetchAuthor(this.props.params.id);
    this.props.fetchAuthorBooks(this.props.params.id);
  }

  render() {
    const { author, books } = this.props;

    if (author) {
      return (
        <Card className="book-card">
          <CardTitle>{author.name}</CardTitle>
          <div>
            <CardText className="mb-0">Books list</CardText>
            {books
              ? books.map(book => (
                  <Link
                    to={`/books/${book.id}`}
                    key={book.id}
                    className="author-list__item"
                  >
                    {book.title}
                  </Link>
                ))
              : null}
          </div>
        </Card>
      );
    } else {
      return null;
    }
  }
}

AuthorPage.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ),
  fetchAuthor: PropTypes.func.isRequired,
  fetchAuthorBooks: PropTypes.func.isRequired
};

export default connect(
  (state, props) => {
    const author = state.authors.authors[props.params.id];
    const books = author ? author.books.map(id => state.books.books[id]) : [];

    return { author, books };
  },
  { fetchAuthor, fetchAuthorBooks }
)(AuthorPage);
