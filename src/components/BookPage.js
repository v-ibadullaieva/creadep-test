import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardText } from "reactstrap";
import { fetchBook } from "../features/books/actions";
import { connect } from "react-redux";
import { Link } from "react-router";

class BookPage extends Component {
  componentDidMount() {
    this.props.fetchBook(this.props.params.id);
  }

  render() {
    const { book } = this.props;

    if (book) {
      return (
        <Card className="book-card">
          <h3>{book.title}</h3>
          <CardText>
            {book.author ? (
              <Link to={`/authors/${book.author.id}`}>{book.author.name}</Link>
            ) : null}
          </CardText>
          <CardText>Year: {book.year}</CardText>
          <CardText>Pages: {book.pages}</CardText>
        </Card>
      );
    } else {
      return null;
    }
  }
}

BookPage.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    author: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  }),
  fetchBook: PropTypes.func.isRequired
};

export default connect(
  (state, props) => ({ book: state.books.books[props.params.id] }),
  { fetchBook }
)(BookPage);
