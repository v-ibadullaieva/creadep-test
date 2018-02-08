import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAuthors } from "../features/authors/actions";
import { Link } from "react-router";

class AuthorsPage extends Component {
  componentDidMount() {
    this.props.fetchAuthors();
  }

  render() {
    return (
      <div>
        {this.props.authors.map(author => (
          <Link
            to={`/authors/${author.id}`}
            key={author.id}
            className="author-list__item"
          >
            {author.name}
          </Link>
        ))}
      </div>
    );
  }
}

AuthorsPage.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ),
  fetchAuthors: PropTypes.func.isRequired
};

export default connect(
  state => ({
    authors: Object.values(state.authors.authors)
  }),
  { fetchAuthors }
)(AuthorsPage);
