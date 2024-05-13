import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../../model/User';
import './profile.css'

export function Profile() {

    let user = new User()
    const [confeitaria, setConfeitaria] = useState({})

    useEffect(() => {
        axios.get('http://localhost:3001/profile?confeitariaId=' + user.getConfeitariaId())
            .then((response) => { setConfeitaria(response.data) })
            .catch((err) => { console.log(err) })
    }, [])

    return (
        <Row id="form">
            <Row id="intro">
                Nome confeitaria
                <Row>
                    <Col xs={3}>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={confeitaria.logo_url} />
                        </Figure>
                    </Col>
                </Row>

            </Row>
            <Col xs={9} style={{ paddingTop: 20 }}>
                <Form class="">
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" id="Nome">
                            Nome da Loja
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type='text' placeholder='Nome'  value={confeitaria.nome} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Telefone
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Telefone" value={confeitaria.celular} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            CNPJ
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="CNPJ" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Endereco
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Endereco" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Telefone
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Telefone" value={confeitaria.telefone} />
                        </Col>
                    </Form.Group>

                    <Button variant="primary" size="sm">Salvar Informacoes</Button>{' '}
                </Form>
            </Col>
        </Row>
    );
}