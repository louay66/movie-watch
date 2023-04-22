import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { moviesReducer } from "../reducer/MovieReducer";

export const store = createStore(moviesReducer, applyMiddleware(thunk));
