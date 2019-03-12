import React, { Component } from 'react'
import { View, Button } from 'react-native'
import styles from './styles'
import ListComponentWrapper from '../../components/listComponent'
import { connect } from 'react-redux'
import { fetchContacts } from '../../actions'

class OnboardingScreen extends Component {

  componentDidMount(){
    this.props.fetchContacts()
  }

  renderButton = () => (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonWrapper}>
        <Button style={styles.button} color='white' title='Next' onPress={() => {}}/>
      </View>
    </View>
  )
  
  render() {
    const { mainContainer, listContainer } = styles
    return (
      <View style={mainContainer}>
        <View style={listContainer}>
          <ListComponentWrapper />
        </View>
        {this.renderButton()}
      </View>
      
    )
  }
}

const mapStateToProps = ({ token }) => ({
  token
});

const mapDispatchToProps = {
  fetchContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingScreen)
