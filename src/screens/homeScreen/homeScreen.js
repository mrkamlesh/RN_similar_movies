import React, { useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'
import { fetchSimilarMovies } from '../../actions'
import SwiperComponent from '../../components/SwiperComponent/swiperComponent'

const HomeScreen = ({ fetchSimilarMovies, onboardingMovies }) => {
  useEffect(() => fetchSimilarMovies(), [])

  const { container } = styles
  return (
    <View style={container}>
      <SwiperComponent movies={onboardingMovies} />
    </View>
  )
}

const mapStateToProps = state => ({
  onboardingMovies: state.onboardingMovies,
})

const mapDispatchToProps = {
  fetchSimilarMovies,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
