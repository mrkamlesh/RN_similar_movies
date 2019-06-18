import React, { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles'
import { getSimilarMovies, setMovieToWatch } from '../../actions'
import SwiperComponent from '../../components/SwiperComponent/swiperComponent'

const HomeScreen = () => {
  const dispatch = useDispatch()

  useEffect(() => dispatch(getSimilarMovies()), [])

  const { similarMoviesList, similarMovies } = useSelector(state => ({
    similarMoviesList: state.similarMoviesList,
    similarMovies: state.similarMovies,
  }))

  const isNotEmpty = similarMovies.length > 0
  const isFetched = similarMoviesList.length >= similarMovies.length - 1

  const renderSpinner = () => (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )

  const renderSwiper = () =>
    isNotEmpty && isFetched ? (
      <SwiperComponent
        movies={similarMoviesList}
        setMovieToWatch={movie => dispatch(setMovieToWatch(movie))}
      />
    ) : (
      renderSpinner()
    )

  const { container } = styles
  return <View style={container}>{renderSwiper()}</View>
}

export default HomeScreen
