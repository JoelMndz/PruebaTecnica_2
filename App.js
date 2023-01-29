import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'

import LoginScreen from './src/screens/LoginScreen'
import JockScreen from './src/screens/JockScreen'
import WifiScreen from './src/screens/WifiScreen'

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Login'>
        <Drawer.Screen name='Login' component={LoginScreen}/>
        <Drawer.Screen name='Jockes' component={JockScreen}/>
        <Drawer.Screen name='Wifi' component={WifiScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App