import { useContext } from "react"
import UsuarioContext from "./UsuarioContext"

function Usuario() {
    const nombreUsuario = useContext(UsuarioContext);
  return (
    <div>Hola {nombreUsuario}</div>
  )
}

export default Usuario