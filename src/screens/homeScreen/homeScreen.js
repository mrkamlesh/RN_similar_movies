
import React, { Component } from 'react'
import { Button, View } from 'react-native'
import styles from './styles'

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
        <Button title="Go to Profile" onPress={() => navigate('Profile')} />
      </View>
    )
  }
}
