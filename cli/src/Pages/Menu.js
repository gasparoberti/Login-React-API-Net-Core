import React from 'react';
import Cookies from 'universal-cookie';

function Menu(props) {
    const cookies= new Cookies();

    const cerrarSesion = async() => {
        // console.log(respuesta);
        cookies.remove('id', {path: '/'});   
        cookies.remove('apellido', {path: '/'});   
        cookies.remove('nombre', {path: '/'});   
        cookies.remove('correo', {path: '/'});   
        cookies.remove('username', {path: '/'});   
        cookies.remove('password', {path: '/'});  
        
        props.history.push('/');
    }

    return (
        <div className="container">
            <button className="btn btn-danger" onClick={() => cerrarSesion()}>Cerrar Sesión</button>
            
            <h1>Bienvenido {cookies.get('username')}</h1>
        </div>
    );
}

export default Menu;