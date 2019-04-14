import React from 'react'
import { connect } from "react-redux";
import { MoviesListDetailed } from './moviesListDetailed/moviesListDetailed';

const MyMovies = ({onboardingMovies}) => <MoviesListDetailed moviesList={onboardingMovies} />

const mapStateToProps = ({onboardingMovies}) => ({
  onboardingMovies
})

export default connect(mapStateToProps)(MyMovies);
