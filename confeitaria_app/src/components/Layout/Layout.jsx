import { Sidebar } from '../Sidebar'
import { Header } from '../Header'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './style.css'

export function Layout(props){
    return (
        <Container fluid>
            <Row>
                <Col xs={12}><Header /></Col>
            </Row>
            <Row style={{marginTop: 12, marginLeft: 12, marginRight: 12}}>
                <Col xs={3}><Sidebar/></Col>
                <Col xs={9}>{props?.children}</Col>
            </Row>
        </Container>
    )
}