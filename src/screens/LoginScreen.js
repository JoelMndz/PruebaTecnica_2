import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'

const LoginScreen = () => {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const deshabilitarBoton = ()=>{
    return password.length < 8 || username.length == 0;
  }
  
  return (
    <Layout>
        <View style={{ flex: 1,  justifyContent: 'center', width:'100%', alignItems:'center'}}>
          <View style={styles.card}>
            <TextInput
              style={styles.inputText}
              placeholder='Username'
              onChangeText={(texto) => setUsername(texto)}
            />
            <TextInput
              style={styles.inputText}
              placeholder='Password'
              secureTextEntry={true}
              onChangeText={(texto)=> setPassword(texto)}
            />
            <Text>{password.length}/8</Text>

            <TouchableOpacity
              disabled={deshabilitarBoton()}
              style={{
                ...styles.boton,
                backgroundColor:deshabilitarBoton() ?'#222':'#262C96'
              }}
            >
              <Text
                style={styles.textoBoton}
              >Login</Text>
            </TouchableOpacity>
          </View>
        </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:'#F8F8F8', 
    height:'50%',
    width: '90%',
    padding: 20,
    borderRadius:30
  },
  inputText:{
    width:'100%',
    backgroundColor:'#fff',
    borderColor:'#000',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    marginTop: 30
  },
  boton:{
    borderRadius: 10,
    marginTop: 35,
    padding:10,
  },
  textoBoton:{
    color:'#fff',
    textAlign:'center',
    fontSize: 20,
    fontWeight: '600'
  }
});

export default LoginScreen