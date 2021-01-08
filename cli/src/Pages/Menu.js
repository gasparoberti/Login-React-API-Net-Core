import React, {useEffect} from 'react';
import Cookies from 'universal-cookie';

import { Navbar, Nav, NavDropdown, Button, Table, Form} from 'react-bootstrap';

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

    useEffect(() => {
        if(!cookies.get('id')) {
            props.history.push('/');
        }
    }, []);

    return (
        // <div className="container">
        //     <button className="btn btn-danger" onClick={() => cerrarSesion()}>Cerrar Sesión</button>
            
        //     <h1>Bienvenido {cookies.get('username')}</h1>
        // </div>

        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">LOGIN </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                    <Navbar.Text className="mr-sm-2">
                        <a href="#">{cookies.get('username')}</a>
                    </Navbar.Text>
                    <Button variant="outline-danger" onClick={() => cerrarSesion()}>Cerrar Sesión</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>

            <div className="container">
                <br/>
                <h2>Tabla Estática</h2>

                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        
        </div>
    );
}

export default Menu;