import React, {useState} from "react";
import SweetAlert from 'sweetalert2-react';

export const App = () => {

    const [email, setEmail] = useState("")  //Hook
    const [password, setPassword] = useState("")

    const handleClick = (event) => {
        event.preventDefault()
        console.log("Tu email:" + email)
        console.log("Tu password es:"+ password)

        //Enviar esta informacion al servidor
    }


    
    return (
        <form>
            <h3>Entra al portal</h3>


            <div className="form-group">
                <label>Email</label>
                <input 
                type="email" 
                className="form-control" 
                placeholder="Tu email" 
                required={true}
                onKeyUp={ (event) => setEmail(event.target.value) }
                />
            </div>

            <div className="form-group">
                <label>Contraseña</label>
                <input 
                type="password" 
                className="form-control" 
                placeholder="Tu contraseña, mínimo 6 carácteres" 
                onKeyUp={(event) => setPassword(event.target.value)}
                required={true}
                />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Recuerdáme</label>
                </div>
            </div>

            <button 
            className="btn btn-primary btn-block"
            onClick={(event) => handleClick(event)}
            >Entrar
            
            </button>
            
            <p className="forgot-password text-right">
                Olvidaste tu <a href="">contraseña?</a>
            </p>
        </form>
    );
    
}