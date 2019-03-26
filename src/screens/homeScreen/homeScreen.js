
import React, { Component } from 'react'
import { Button, View } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import { fetchContacts } from '../../actions'
import ListComponentWrapper from '../../components/listComponent'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  }

  componentDidMount(){
    this.props.fetchContacts()
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

const mapStateToProps = ({ token, movies }) => ({
  token
});

const mapDispatchToProps = {
  fetchContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
