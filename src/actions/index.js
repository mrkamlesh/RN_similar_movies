import { GraphRequestManager, GraphRequest } from 'react-native-fbsdk';
import axios from 'axios';
import { api_key } from '../../api_keys';


export const saveAccessToken = (token) => ({
  type: "SAVE_TOKEN",
  token
})

export const moviesFetched = (movies) => ({
  type: 'FETCH_MOVIES_SUCCESS',
  movies
});

export const fetchingError = () => ({
  type: 'FETCH_MOVIES_FAILURE'
});

export const fetchContacts = () => (dispatch, getState) => {
  const { token } = getState()

  const responseInfoCallback = (error, res) => {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
      dispatch(fetchingError)
    } else {
      console.log('Success fetching data: ', res);
      dispatch(moviesFetched(res.data))
    }
  }

  const movieRequest = new GraphRequest(
    '/me/movies',
    {
      accessToken: token
    },
    responseInfoCallback,
  );

  new GraphRequestManager().addRequest(movieRequest).start();
};

export const movieData = (movie) => ({
  type: 'MOVIE_DATA_SUCCESS',
  movie
});

export const movieDataError = () => ({
  type: 'MOVIE_DATA_FAILURE'
});

export const getMovieData = (movieName) => (dispatch) => {
  const query = movieName.split(' ').join('%20')
  const URL = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${api_key}`
  axios.get(URL)
  .then(data => {
    let movie = data.data.results[0]
    dispatch(movieData(movie));
  }).catch(err => dispatch(movieDataError()));
};
