import { movieAPI, Allmovie } from "../types/MovieTypes";
import axios from "axios";

export const getAllMovies = () => {
  return async (dispatch) => {
    const res = await axios.get(movieAPI);
    dispatch({
      type: Allmovie,
      data: res.data.results,
      pages: res.data.total_pages
    });
  };
};

export const SearchMovie = (url) => {
  return async (dispatch) => {
    const res = await axios.get(url);
    dispatch({
      type: Allmovie,
      data: res.data.results,
      pages: res.data.total_pages
    });
  };
};

export const getMoviePage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=9f83791403f6d6c937be5caf2e1ec05c&page=${page}`
    );
    dispatch({
      type: Allmovie,
      data: res.data.results,
      pages: res.data.total_pages
    });
  };
};
