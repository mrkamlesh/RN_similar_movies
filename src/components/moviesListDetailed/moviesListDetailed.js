import React from 'react'
import { Text, FlatList, View, ImageBackground } from 'react-native'
import styles from './styles'
import { tmdbImage } from '../../utils/images'

const MoviesListDetailed = ({ movies }) => {
  const keyExtractor = item => item.id
  const renderItem = ({ item }) => {
    const uri = tmdbImage(item.data.poster_path)
    const { itemContainer, imageBackground, imageStyle, title, shadowView } = styles
    return (
      <View style={itemContainer}>
        <ImageBackground source={{ uri }} style={imageBackground} imageStyle={imageStyle}>
          <View style={shadowView}>
            <Text style={title}>{item.title}</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }

  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.listContainer}
    />
  )
}

export default MoviesListDetailed
