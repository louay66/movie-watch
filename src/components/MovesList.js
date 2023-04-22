import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import PaginationList from "./Pagination";
import { getAllMovies } from "../redux/action/MovieAction";
import { useDispatch, useSelector } from "react-redux";

const MovesList = () => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovies());
    // eslint-disable-next-line
  }, []);

  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })
      ) : (
        <h2 className="text-center p-5 ">Movies not found</h2>
      )}
      {movies.length >= 1 ? <PaginationList /> : null}
    </Row>
  );
};

export default MovesList;
