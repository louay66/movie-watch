import { Allmovie } from "../types/MovieTypes";

const initiallValue = { movies: [], pageCount: 0 };
export const moviesReducer = (state = initiallValue, action) => {
  switch (action.type) {
    case Allmovie:
      return { movies: action.data, pageCount: action.pages };
    default:
      return state;
  }
};
