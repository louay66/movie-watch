import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Col xs="6" sm="6" md="3" className="my-1 mb-3">
      <Link to={`/movie/${movie.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
            className="card__image "
            alt="hu"
          />
          <div className="card__overlay">
            <div className="overlay__text text-center W100 p-2">
              <p>Title of Film : {movie.title} </p>
              <p>Date : {movie.release_date} </p>
              <p>Nomber of voter : {movie.vote_count} </p>
              <p>Vote averageote: {movie.vote_average} </p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};
export default MovieCard;
