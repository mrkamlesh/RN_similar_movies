import React from 'react'
import { RkChoice } from 'react-native-ui-kitten'
import { Text, FlatList, View } from 'react-native'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  itemContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  },
  checkBox: {
    backgroundColor: 'gray'
  }
})

export const MoviesList = ({moviesList, selectItem}) => {

  keyExtractor = (item) => item.id;

  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.title}</Text>
      <RkChoice
        rkType='clear'
        selected={false}
        onChange={val => selectItem(val, item)}
        style={styles.checkBox}
      />
    </View>
  )

  return (
    <FlatList
      data={moviesList}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  )
}
