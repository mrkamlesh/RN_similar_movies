const initialState = []

export const onboardingMovies = (state = initialState, action) => {
  console.log(action.type, action)
  switch (action.type) {
    case 'SET_ONBOARDING_MOVIES':
      return action.movies
    default:
      return state
  }
}
