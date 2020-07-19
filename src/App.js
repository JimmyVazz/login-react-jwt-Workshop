import React, {useState} from "react";
import SweetAlert from 'sweetalert2-react';
export const App = () => {

    
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
                />
            </div>

            <div className="form-group">
                <label>Contraseña</label>
                <input 
                type="password" 
                className="form-control" 
                placeholder="Tu contraseña, mínimo 6 carácteres" 
                required={true}
                />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Recuerdáme</label>
                </div>
            </div>

            <button onClick={(e) => handleLogin(e)} className="btn btn-primary btn-block">Entrar</button>
            <p className="forgot-password text-right">
                Olvidaste tu <a href="/soporte">contraseña?</a>
            </p>
        </form>
    );
    
}