import { View, Text, FlatList } from 'react-native'
import React,{useEffect} from 'react'

import Layout from '../components/Layout'
import ListadoWifi from '../components/ListadoWifi'

const WifiScreen = () => {

  return (
    <Layout>
      <ListadoWifi/>
    </Layout>
  )
}

export default WifiScreen