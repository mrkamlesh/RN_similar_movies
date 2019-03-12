import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'
import LoginWrapper from '../../components/loginComponent'


export default class LoginScreen extends Component {

  render() {
    const { container } = styles
    return (
      <View style={container}>
        <LoginWrapper />
      </View>
    )
  }
}
