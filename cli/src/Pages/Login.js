import React, {useState} from 'react';
import md5 from 'md5';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import '../Css/Login.css'; 

function Login(props) {
    const baseUrl="";

    const [form, setForm] = useState({
        username:'',    //deben tener el mismo valor que name en el input
        password:''
    })

    const handleChange = e => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
        console.log(form);
    }

    return (
        <div className="containerPrincipal">
            <div className="containerLogin">
                <div className="form-group">
                    <label>Usuario: </label>
                    <br />
                    <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={handleChange}
                    />
                    <br />
                    <label>Contraseña: </label>
                    <br />
                    <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={handleChange}
                    />
                    <br />
                    {/* <button className="btn btn-primary" onClick={()=>iniciarSesion()}>Iniciar Sesión</button> */}
                    <button className="btn btn-primary">Iniciar Sesión</button>
                </div>
            </div>
        </div>
    );
}

export default Login;