import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchContacts, setOnboardingMovies } from '../../actions'
import OnboardingList from '../../components/onboardingList/onboardingList';

const OnboardingScreen = ({fetchContacts, setOnboardingMovies, navigation}) => {
  const [movies, setmovies] = useState(null);

  useEffect(() => fetchContacts(), []);

  const submit = () => {
    setOnboardingMovies(movies);
    navigation.navigate('App');
  }

  const selectedMovies = movies => setmovies(movies)

  return <OnboardingList selectedMovies={selectedMovies} submit={submit} />
}

const mapDispatchToProps = {
  fetchContacts,
  setOnboardingMovies,
};

export default connect(null, mapDispatchToProps)(OnboardingScreen)
