import { combineReducers } from "redux"
import { auth } from "./auth"
import { movies } from "./movies"
import { moviesList } from './moviesList';
import { onboardingMovies } from './onboardingMovies';

export default combineReducers({
  auth,
  movies,
  moviesList,
  onboardingMovies
})
