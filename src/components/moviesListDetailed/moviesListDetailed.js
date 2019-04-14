import React from 'react'
import { Text, FlatList, View, Image } from 'react-native'
import styles from '.styles'
import { tmdbImage } from '../../utils/images';

export const MoviesListDetailed = ({moviesList}) => {

  keyExtractor = item => item.id;
  
  renderItem = ({ item }) => {
    let uri = tmdbImage(item.data.poster_path)
    return (
      <View style={styles.itemContainer}>
        <Text>{item.title}</Text>
        <Text>{item.data.overview}</Text>
        <Image source={{uri}} style={styles.image}/> 
      </View>
    )
  }

  return (
    <FlatList
      data={moviesList}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  )
}

