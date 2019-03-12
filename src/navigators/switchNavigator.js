import React from 'react'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import LoginScreen from '../screens/loginScreen/loginScreen'
import RootStack from '../navigators/rootStack'
import OnboardingScreen from '../screens/onboardingScreen/onboardingScreen'

export default SwitchNavigator = createSwitchNavigator(
  {
    App: RootStack,
    Auth: LoginScreen,
    Onboarding: OnboardingScreen
  },
  {
    initialRouteName: 'Auth',
  }
);
