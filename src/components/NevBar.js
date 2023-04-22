import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/logo.png";
import { useDispatch } from "react-redux";
import { SearchMovie, getAllMovies } from "../redux/action/MovieAction";

const NevBar = () => {
  const onSearch = (word) => {
    Search(word);
  };
  const dispatch = useDispatch();

  const Search = async (word) => {
    if (word === "") {
      dispatch(getAllMovies());
    } else {
      dispatch(SearchMovie(word));
    }
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="anythig" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search w-100">
              <i className="fa fa-search"></i>
              <input
                onChange={(e) => {
                  onSearch(e.target.value);
                }}
                type="text"
                className="from-contol w-100"
                placeholder="Searchsearch"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NevBar;
