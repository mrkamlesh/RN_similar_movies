import React, { Component } from 'react'
import { Text, FlatList, View } from 'react-native'
import { connect } from "react-redux";
import isEqual from "lodash/isEqual"
import { RkChoice } from 'react-native-ui-kitten';
import remove from 'lodash/remove';
import { getMovieData } from '../actions'
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

class ListComponent extends Component {

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props.movies, nextProps.movies) || !isEqual(this.props.moviesList, nextProps.moviesList)
  }

  state = {
    moviesFetched: false,
    favMovies: [],
  }

  componentDidUpdate(){
    const { movies } = this.props;
    if (movies.length > 0 && !this.state.moviesFetched) {
      this.props.movies.forEach(movie => {
        this.props.getMovieData(movie.name);
      });
      this.setState({moviesFetched: true})
    }
  }

  _keyExtractor = (item) => item.id;

  changeFavMovies = (val, item) => {
    console.log(val, item);
    let favMovies = [ ...this.state.favMovies];
    if (!val) {
      favMovies.push(item);
    } else {
      favMovies = favMovies.filter(el => el.data.id !== item.data.id)
    }
    this.setState({ favMovies }, () => console.log('aa', this.state.favMovies));
  }

  renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.title}</Text>
      <RkChoice
        rkType='clear'
        selected={false}
        onChange={val => this.changeFavMovies(val, item)}
        style={styles.checkBox}
      />
    </View>
  )

  render() {
    return (
      <FlatList
        data={this.props.moviesList}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
      />
    )
  }
}


const mapStateToProps = ({movies, moviesList}) => ({
  movies,
  moviesList
})

const mapDispatchToProps = {
  getMovieData
};

export default ListComponentWrapper = connect(mapStateToProps, mapDispatchToProps)(ListComponent);
