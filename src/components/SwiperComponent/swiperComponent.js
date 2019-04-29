import React from 'react'
import { View } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import CardComponent from '../cardComponent/cardComponent'

const SwiperComponent = ({ movies, setMovieToWatch }) => (
  <View>
    <Swiper
      useViewOverflow={false}
      cards={movies}
      renderCard={CardComponent}
      onSwiped={cardIndex => {
        console.log(cardIndex)
      }}
      onSwipedAll={() => {
        console.log('onSwipedAll')
      }}
      onSwipedRight={item => setMovieToWatch(movies[item])}
      cardIndex={0}
      backgroundColor="#4FD0E9"
      stackSize={3}
      verticalSwipe={false}
    />
  </View>
)

export default SwiperComponent
