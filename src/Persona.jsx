import { useContext } from "react"
import UsuarioContext from "./UsuarioContext";

function Persona() {
    const nombreUsuario = useContext(UsuarioContext);
  return (
    <div>Persona {nombreUsuario}</div>
  )
}

export default Persona