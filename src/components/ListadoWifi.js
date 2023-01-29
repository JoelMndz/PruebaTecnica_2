import { View, Text,PermissionsAndroid, StyleSheet, RefreshControl, ToastAndroid} from 'react-native'
import {useEffect, useState, useCallback} from 'react'
import WifiManager from "react-native-wifi-reborn";
import { FlatList } from 'react-native-gesture-handler';
import ItemWifi from './ItemWifi'

const ListadoWifi = () => {

  const [permisoConcedido, setPermisoConcedido] = useState(false)
  const [redesWifi, setRedesWifi] = useState([])
  const [refrescando, setRefrescando] = useState(false)

  const refrescarLista = useCallback(async ()=>{
    setRefrescando(true);
    await listarWifi()
    setRefrescando(false);
  })

  const permisoUbicacion = async()=>{
    const resultado = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    if(resultado == PermissionsAndroid.RESULTS.GRANTED){
      setPermisoConcedido(true);
      return
    }
    setPermisoConcedido(false);
  }

  const listarWifi = async()=>{
    await permisoUbicacion()
    if(!permisoConcedido){
      ToastAndroid.show('No se ha concedido el permiso!', ToastAndroid.SHORT)
      setRedesWifi([])
      return;
    }
    const wifiActivado = await WifiManager.isEnabled();
    
    if(wifiActivado){
      const listado = await WifiManager.loadWifiList()
      setRedesWifi(listado)
    }else{
      ToastAndroid.show('El wifi esta desactivado!', ToastAndroid.SHORT)
      setRedesWifi([])
    }
  }

  useEffect(()=>{
    listarWifi()
  },[])

  return (
    <FlatList
      style={{width:'100%'}}
      data={redesWifi}
      renderItem={({item}) =>{
        return <ItemWifi wifi={item}/>
      }}
      refreshControl={
        <RefreshControl
          refreshing={refrescando}
          onRefresh={refrescarLista}/>}
    />
  )
}

const styles = StyleSheet.create({
  texto:{
    fontSize:20
  }
})

export default ListadoWifi