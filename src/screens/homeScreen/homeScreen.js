
import React, { Component } from 'react'
import { Button, View } from 'react-native'
import styles from './styles'
import Login from '../../components/loginComponent'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  }

  render() {
    const {
      navigation: { navigate },
    } = this.props
    const { container } = styles
    return (
      <View style={container}>
        <Login />
        <Button title="Go to Profile" onPress={() => navigate('Profile')} />
      </View>
    )
  }
}
