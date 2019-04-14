import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'
import LoginWrapper from '../../components/loginComponent'

const LoginScreen = () => {
  const { container } = styles
  return (
    <View style={container}>
      <LoginWrapper />
    </View>
  )
}

export default LoginScreen;
