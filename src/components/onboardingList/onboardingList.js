import React from 'react'
import { View, Button } from 'react-native'
import styles from './styles'
import ListComponent from '../listComponent';

const OnboardingList = ({selectedMovies, submit}) => {
  const renderButton = () => (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.button}
          color='white'
          title='Next'
          onPress={submit}
        />
      </View>
    </View>
  )

  const { mainContainer, listContainer } = styles
  return (
    <View style={mainContainer}>
      <View style={listContainer}>
        <ListComponent selectedMovies={selectedMovies} />
      </View>
      {renderButton()}
    </View> 
  )
}

export default OnboardingList;
