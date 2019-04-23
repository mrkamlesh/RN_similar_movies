import React from 'react'
import { View, ImageBackground } from 'react-native'
import styles from './styles'
import { tmdbImage } from '../../utils/images'

const CardComponent = ({ data }) => {
  const uri = tmdbImage(data.poster_path)
  return (
    <View style={styles.card}>
      <ImageBackground source={{ uri }} style={styles.container} imageStyle={styles.image} />
    </View>
  )
}

export default CardComponent
