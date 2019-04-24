import React, { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'
import { getSimilarMovies } from '../../actions'
import SwiperComponent from '../../components/SwiperComponent/swiperComponent'

const HomeScreen = ({ similarMoviesList, getSimilarMovies, similarMovies }) => {
  useEffect(() => getSimilarMovies(), [])

  const isNotEmpty = similarMovies.length > 0
  const isFetched = similarMoviesList.length >= similarMovies.length - 1

  const renderSpinner = () => (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )

  const renderSwiper = () =>
    isNotEmpty && isFetched ? <SwiperComponent movies={similarMoviesList} /> : renderSpinner()

  const { container } = styles
  return <View style={container}>{renderSwiper()}</View>
}

const mapStateToProps = ({ similarMoviesList, similarMovies }) => ({
  similarMoviesList,
  similarMovies,
})

const mapDispatchToProps = {
  getSimilarMovies,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
