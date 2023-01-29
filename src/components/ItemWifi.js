import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const ItemWifi = ({wifi}) => {
  return (
    <View style={styles.card}>
      <Text
        style={styles.texto}
      >{wifi.SSID}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:'#EEEFF1',
    marginVertical:10,
    padding:20,
    borderRadius:10
  },
  texto:{
    color:'#0A73CF',
    textAlign:'center',
    fontSize:18,
    fontWeight:'500'
  }
})
export default ItemWifi