import React from 'react'
import { Text, FlatList, View, Image, ImageBackground } from 'react-native'
import styles from './styles'
import { tmdbImage } from '../../utils/images';

export const MoviesListDetailed = ({moviesList}) => {

  keyExtractor = item => item.id;
  
  renderItem = ({ item }) => {
    let uri = tmdbImage(item.data.poster_path)
    const { itemContainer, imageBackground, imageStyle, title, shadowView } = styles
    return (
      <View style={itemContainer}>
        <ImageBackground source={{uri}}
          style={imageBackground}
          imageStyle={imageStyle}
        >
          <View style={shadowView}>
            <Text style={title}>{item.title}</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }

  return (
    <FlatList
      data={moviesList}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.listContainer}
    />
  )
}

