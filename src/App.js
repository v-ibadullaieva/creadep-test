import React from "react";
import "./App.css";
import { Link } from "react-router";
import { Container } from "reactstrap";

export default props => {
  return (
    <div className="App">
      <Container>
        <div className="mb-30">
          <h1 className="pt-10">Books app</h1>
          <Link to="/books">Books list</Link>
          <br />
          <Link to="/authors">Authors list</Link>
        </div>
        {props.children}
      </Container>
    </div>
  );
};
