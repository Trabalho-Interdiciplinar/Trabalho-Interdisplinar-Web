import { SignOut } from "@phosphor-icons/react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import './style.css'

export function Sidebar(){
    return (
        <Row>
            <Col>
                <p>Categorias dos produtos</p>
                <ListGroup>
                    <ListGroup.Item action>Bolo</ListGroup.Item>
                    <ListGroup.Item action>Salgado</ListGroup.Item>
                    <ListGroup.Item action>Sem Glutem</ListGroup.Item>
                    <ListGroup.Item action>Doces</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    )
}