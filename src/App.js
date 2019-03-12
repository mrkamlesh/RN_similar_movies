import React from 'react'
import SwitchNavigator from './navigators/switchNavigator'
import { store } from "./config/store";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <SwitchNavigator />
  </Provider>
)

export default App
