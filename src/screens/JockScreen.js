import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
import Chucknorris from '../components/Chucknorris'
const JockScreen = () => {
  return (
    <Layout>
      <View style={{ flex: 1,  justifyContent: 'center', width:'100%', alignItems:'center'}}>
        <Chucknorris/>
      </View>
    </Layout>
  )
}

export default JockScreen