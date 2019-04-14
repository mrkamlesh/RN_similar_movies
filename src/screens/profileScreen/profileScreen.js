import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'
import MyMovies from '../../components/myMovies'

const ProfileScreen = () => {
  const { container } = styles
  return (
    <View style={container}>
      <MyMovies />
    </View>
  )
}

export default ProfileScreen;
