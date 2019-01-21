import React, { Component } from 'react'
import { View } from 'react-native'
import Reactotron from 'reactotron-react-native'
import styles from './styles'
import ListComponent from '../../components/listComponent'

export default class ProfileScreen extends Component {
  render() {
    const { container } = styles
    Reactotron.log('hello rendering world')
    return (
      <View style={container}>
        <ListComponent />
      </View>
    )
  }
}
