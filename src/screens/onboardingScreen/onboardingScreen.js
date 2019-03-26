import React, { Component } from 'react'
import { View, Button } from 'react-native'
import styles from './styles'
import ListComponentWrapper from '../../components/listComponent'
import { connect } from 'react-redux'
import { fetchContacts, setOnboardingMovies } from '../../actions'

class OnboardingScreen extends Component {

  state = {
    movies: null
  }

  componentDidMount(){
    this.props.fetchContacts()
  }

  submit = () => {
    this.props.setOnboardingMovies(this.state.movies);
    this.props.navigation.navigate('App');
  }

  selectedMovies = movies => this.setState({ movies })

  renderButton = () => (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.button}
          color='white'
          title='Next'
          onPress={this.submit}
        />
      </View>
    </View>
  )
  
  render() {
    const { mainContainer, listContainer } = styles
    return (
      <View style={mainContainer}>
        <View style={listContainer}>
          <ListComponentWrapper selectedMovies={this.selectedMovies} />
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
  fetchContacts,
  setOnboardingMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingScreen)
