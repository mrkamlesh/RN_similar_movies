import { movies } from '../testUtils/onboardingListData'
import { moviesFetched } from '../actions/index'

export const mockedFetchOnboardingMovies = () => (dispatch, getState) => {
  dispatch(moviesFetched(movies))
}
