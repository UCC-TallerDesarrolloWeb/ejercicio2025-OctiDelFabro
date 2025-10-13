import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/login.scss"





const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const navigate = useNavigate();
    const handlerLogin = async (e) => {
        e.preventDefault();


        if (usuario === "admin" && contraseña === "admin") {
            console.log("Login OK");
            navigate("/actividades")
        } else {
            console.log("Login Incorrecto");
        }
    
    }
    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handlerLogin}>
                <h2>Iniciar sesion</h2>
                <label htmlFor="usuario">Usuario</label>

                <input 
                    id="usuario"
                    type="text" 
                    placeholder="Usuario" 
                    value={usuario} onChange={(e) => setUsuario(e.target.value)} 
                    required />
                <label htmlFor="contraseña">Contraseña</label>
                <input 
                    id="contraseña"
                    type="password" 
                    placeholder="Contraseña" 
                    value={contraseña} onChange={(e) => setContraseña(e.target.value)} 
                    required />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login;