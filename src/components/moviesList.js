import React from 'react'
import { RkChoice } from 'react-native-ui-kitten'
import { Text, FlatList, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  itemContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  checkBox: {
    backgroundColor: 'gray',
  },
})

const MoviesList = ({ moviesList, selectItem }) => {
  const keyExtractor = item => item.id
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.title}</Text>
      <RkChoice
        rkType="clear"
        selected={false}
        onChange={val => selectItem(val, item)}
        style={styles.checkBox}
      />
    </View>
  )

  return <FlatList data={moviesList} renderItem={renderItem} keyExtractor={keyExtractor} />
}

export default MoviesList
