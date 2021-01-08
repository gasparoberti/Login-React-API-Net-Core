import React, {useState} from 'react';
import md5 from 'md5';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import '../Css/Login.css'; 

function Login(props) {
    const baseUrl= "https://localhost:44385/api/usuarios";
    const cookies= new Cookies();

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

    const iniciarSesion = async() => {
        await axios.get(baseUrl + `/${form.username}/${md5(form.password)}`)
        .then(response => {
            return response.data;
        }).then(response => {
            if(response.length > 0) {
                var respuesta = response[0];
                // console.log(respuesta);
                cookies.set('id', respuesta.id, {path: '/'});   
                cookies.set('apellido', respuesta.apellido, {path: '/'});   
                cookies.set('nombre', respuesta.nombre, {path: '/'});   
                cookies.set('correo', respuesta.correo, {path: '/'});   
                cookies.set('username', respuesta.username, {path: '/'});   
                cookies.set('password', respuesta.password, {path: '/'});   

                alert("Sesión iniciada por " + respuesta.nombre + " " + respuesta.apellido);

                props.history.push('/menu');
            } else {
                alert("El usuario o la contraseña no son correctos.");
            }
        }).catch(error => {
            console.log(error);
        })
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
                    <button className="btn btn-primary" onClick={()=>iniciarSesion()}>Iniciar Sesión</button>
                    {/* <button className="btn btn-primary">Iniciar Sesión</button> */}
                </div>
            </div>
        </div>
    );
}

export default Login;