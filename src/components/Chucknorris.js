import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import {useState} from 'react'

import {llamarAPI} from '../api'
import imagen from '../../assets/chucknorris_logo.png'

const Chucknorris = () => {

  const [mensaje, setMensaje] = useState('')
  const [cargando, setCargando] = useState(false)
  const ejecutarBoton = async()=>{
    setCargando(true)
    const data = await llamarAPI();
    if(data && data.value){
      setMensaje(data.value)
    }
    setCargando(false)
  }

  return (
    <View style={{width:'95%',alignItems:'center'}}>
      <Image style={styles.imagen} source={imagen}/>
      <TextInput 
        style={styles.input}
        placeholder='Mensaje de Chucknorris'
        value={mensaje}
        multiline={true}
        editable={false}/>

      <TouchableOpacity
        disabled={cargando}
        style={styles.boton}
        onPress={ejecutarBoton}>
        <Text
          style={styles.textoBoton}
          >Consultar</Text>
      </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({
  input:{
    backgroundColor:'#EEEFF1',
    color:'black',
    fontSize: 18,
    borderRadius: 10,
    padding:10,
    marginTop:40
  },
  boton:{
    borderRadius: 10,
    marginTop: 35,
    padding:10,
    borderColor:'black',
    borderWidth: 0.5,
    width: '100%'
  },
  textoBoton:{
    color:'black',
    textAlign:'center',
    fontSize: 20,
    fontWeight: '400'
  },
  imagen:{
    width: 300,
    height: 180
  }
})

export default Chucknorris