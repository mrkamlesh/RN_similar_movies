import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import { getMovieData } from '../actions'
import { MoviesList } from './moviesList';

const ListComponent = ({movies, moviesList = [], getMovieData, selectedMovies}) => {
  const [moviesFetched, setmoviesFetched] = useState(false);
  const [favMovies, setfavMovies] = useState([]);

  useEffect(() => {
    if (movies.length > 0 && !moviesFetched) {
      movies.forEach(movie => {
        getMovieData(movie.name);
      });
      setmoviesFetched(true);
    }
  }, [movies, moviesList]);

  changeFavMovies = (val, item) => {
    let newFavMovies = [ ...favMovies];
    if (!val) {
      newFavMovies.push(item);
    } else {
      newFavMovies = favMovies.filter(el => el.data.id !== item.data.id);
    }
    setfavMovies(newFavMovies);
    selectedMovies(newFavMovies);
  }

  return (
    <MoviesList moviesList={moviesList} selectItem={(val, item) => changeFavMovies(val, item)}/>
  )
}

const mapStateToProps = ({movies, moviesList}) => ({
  movies,
  moviesList
})

const mapDispatchToProps = {
  getMovieData
};

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
