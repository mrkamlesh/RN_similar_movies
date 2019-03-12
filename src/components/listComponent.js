import React, { Component } from 'react'
import { Text, FlatList, View } from 'react-native'
import { connect } from "react-redux";
import isEqual from "lodash/isEqual"
import { RkChoice } from 'react-native-ui-kitten';
import remove from 'lodash/remove';
import { getMovieData } from '../actions'

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

  changeFavMovies = (val, item) => {
    console.log(val, item);
    let favMovies = [ ...this.state.favMovies];
    if (!val) {
      favMovies.push(item);
    } else {
      //_.remove(favMovies, {
      //  data.id = item.id
      //});
      //favMovies = remove(favMovies, el => el.id === item.id)
      favMovies = favMovies.filter(el => el.data.id !== item.data.id)
    }
    this.setState({ favMovies }, () => console.log('aa', this.state.favMovies));
  }

  renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <RkChoice
        rkType='clear'
        selected={false}
        onChange={val => this.changeFavMovies(val, item)}
      />
    </View>
  )

  render() {
    return <FlatList data={this.props.moviesList} renderItem={this.renderItem} />
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
