
const API = 'https://api.chucknorris.io/jokes/random'

export const llamarAPI = async ()=>{
  const respuesta = await fetch(API)
  return await respuesta.json()
}