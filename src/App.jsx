import { useState, useContext } from 'react'
import UsuarioContext from './UsuarioContext';
import './App.css'
import Usuario from './Usuario';
import Persona from './Persona';



function App() {
  const usuario = "Luis";
  return (
    <>
    <UsuarioContext.Provider value ={usuario}>
      <Usuario></Usuario>
      <Persona></Persona>
    </UsuarioContext.Provider>
    
    </>
  )
}

export default App
