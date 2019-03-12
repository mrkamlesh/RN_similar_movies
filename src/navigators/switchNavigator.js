import React from 'react'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import LoginScreen from '../screens/loginScreen/loginScreen'
import RootStack from '../navigators/rootStack';


export default SwitchNavigator = createSwitchNavigator(
  {
    App: RootStack,
    Auth: LoginScreen,
  },
  {
    initialRouteName: 'Auth',
  }
);
