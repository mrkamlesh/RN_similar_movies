import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'
import SwiperComponent from '../../components/SwiperComponent/swiperComponent'

const HomeScreen = ({ onboardingMovies }) => {
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

export default connect(
  mapStateToProps,
  null
)(HomeScreen)
