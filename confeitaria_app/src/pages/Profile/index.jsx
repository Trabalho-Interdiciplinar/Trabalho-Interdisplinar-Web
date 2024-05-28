import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../../model/User';
import "./perfil-css.css";

export function Profile() {

    let user = new User()
    const [confeitaria, setConfeitaria] = useState({})

    useEffect(()=>{
        axios.get('http://localhost:3001/profile?confeitariaId=' + user.getConfeitariaId())
        .then((response) => { setConfeitaria(response.data) })
        .catch((err) => { console.log(err)})
    }, [])

    return (
        <Row className='corpo-perfil'>
            <Col xs={3}>
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={confeitaria.logo_url} />
                </Figure>
            </Col>
            <Col xs={9} style={{ paddingTop: 20 }}>
                <Form className='formulario-perfil'>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Nome da Loja
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control className='campo-perfil' type='text' placeholder='Nome' value={confeitaria.nome} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Telefone
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control className='campo-perfil' type="text" placeholder="Telefone" value={confeitaria.celular}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            CNPJ
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control className='campo-perfil' type="text" placeholder="CNPJ" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Endereco
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control className='campo-perfil' type="text" placeholder="Endereco" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Telefone
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control className='campo-perfil' type="text" placeholder="Telefone" value={confeitaria.telefone}/>
                        </Col>
                    </Form.Group>

                    <Button variant="primary" size="sm" className='salvar-perfil'>Salvar Informações</Button>{' '}
                </Form>
            </Col>
        </Row>
    );
}