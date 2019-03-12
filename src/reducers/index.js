import { combineReducers } from "redux"
import { auth } from "./auth"
import { movies } from "./movies"
import { moviesList } from './moviesList';

export default combineReducers({
  auth,
  movies,
  moviesList
})
