import { Sidebar } from '../Sidebar'
import { Header } from '../Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './style.css'

export function Layout(props){
    return (
        <Container fluid>
            <Row className='cabecalhoPadrao'>
                <Col xs={12}><Header /></Col>
            </Row>
            <Row className = 'layoutPadrao' style={{marginTop: 12, marginLeft: 12, marginRight: 12}}>
                {/* <Col xs={3}><Sidebar/></Col> */}
                <Col id = 'pagProdutos'>{props?.children}</Col>
            </Row>
        </Container>
    )
}