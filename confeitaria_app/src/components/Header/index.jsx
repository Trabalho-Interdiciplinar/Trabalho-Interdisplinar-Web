import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { User } from '../../model/User';
import "./style.css";
import "./headerestilo.css";

export function Header() {
    let navigate = useNavigate();

    const handleLogout = () => {
        (new User()).signOut()
        navigate('/')
    }

    return (
        <Navbar expand="xxl"  className="header-cabecalho" >
            <Container className='container-header'>
                <Navbar.Brand href="/loja/" className='titulo-header'>SweetConnection</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Produtos" id="basic-nav-dropdown" className='aux-header aux2-header'>
                            <NavDropdown.Item href="novo-produto">Novo</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Categorias
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="perfil" className='aux2-header'>Perfil</Nav.Link>
                        <Nav.Item href="customization" onClick={handleLogout} className='aux2-header'>
                                Sair
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}