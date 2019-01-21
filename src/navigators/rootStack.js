import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../screens/homeScreen/homeScreen'
import ProfileScreen from '../screens/profileScreen/profileScreen'

const RootStack = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`
        }
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)

export default RootStack
