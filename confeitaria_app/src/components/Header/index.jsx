import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { User } from '../../model/User';

export function Header() {
    let navigate = useNavigate();

    const handleLogout = () => {
        (new User()).signOut()
        navigate('/')
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/loja/" >SweetConnection</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Produtos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="novo-produto">Novo</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Categorias
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="perfil">Perfil</Nav.Link>
                        <Nav.Item href="customization" onClick={handleLogout}>
                                Sair
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}