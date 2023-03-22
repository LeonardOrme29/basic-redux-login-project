import React,{useState} from 'react'
import { useSelector } from 'react-redux'
function Home() {
  const authState=useSelector(state=>state.auth)
  let nombre=null;
  if (authState.user!==null) {
    nombre=authState.user.nombre;
  }
  console.log(nombre)
  return (
    <div className="App">
    <h2>HOME</h2>
    {
      nombre!=null && <h2>Hola {nombre}</h2>
    }
  </div>
  )
}

export default Home