import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import WifiManager from "react-native-wifi-reborn";

const WifiScreen = () => {

  const listarWifi = async()=>{
    const habilitado = await WifiManager.isEnabled();
    console.log(habilitado);
  }

  useEffect(()=>{
    listarWifi()
  })

  return (
    <View>
      <Text>WifiScreen</Text>
    </View>
  )
}

export default WifiScreen