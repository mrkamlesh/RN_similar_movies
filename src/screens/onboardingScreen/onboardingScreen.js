import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchContacts, setOnboardingMovies } from '../../actions'
import OnboardingList from '../../components/onboardingList/onboardingList'

const OnboardingScreen = ({ navigation: { navigate } }) => {
  const [movies, setMovies] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => dispatch(fetchContacts()), [])

  const submit = () => {
    dispatch(setOnboardingMovies(movies))
    navigate('App')
  }

  const selectedMovies = moviesList => setMovies(moviesList)

  return <OnboardingList selectedMovies={selectedMovies} submit={submit} />
}

export default OnboardingScreen
