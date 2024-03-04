import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { User } from '../../model/User';

export function Confeitaria(){

    let user = new User()

    const confeitaria = {
        nome: '',
        bairro: '',
        numero: '',
        logradouro: '',
        descricao: '',
        telefone: '',
        celular: '',
        logo_url: '',
        usuario_id: user.getUserId()
    }

    const handleSave = (e) => {
        e.preventDefault()
        console.log(confeitaria)

        axios.post('http://localhost:3001/confeitaria', confeitaria, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then(response => {
                console.log(response)
                user.saveConfeitaria(response.data)
            })
            .catch(err => console.log(err))
    }
    
    return(
        <Container style={{height: '100vh'}}>
            <Row className='d-flex flex-row' style={{height: '100vh'}}>
                <Col xs={12} className='d-flex justify-content-center align-items-center'>
                    <Form>
                        <p>Formulario para cadastro de confeitaria</p>
                        <Form.Group className="mb-4">
                            <Form.Label>Nome da confeitaria</Form.Label>
                            <Form.Control type="text" onChange={(e) => confeitaria.nome = e.target.value }/>
                        </Form.Group>

                        <Form.Group className="mb-4" >
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control type="text" onChange={(e) => confeitaria.bairro = e.target.value }/>

                            <Form.Label>Numero</Form.Label>
                            <Form.Control type="text" onChange={(e) => confeitaria.numero = e.target.value }/>
                            
                            <Form.Label>Logradouro</Form.Label>
                            <Form.Control type="text" onChange={(e) => confeitaria.logradouro = e.target.value }/>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Descrição da confeitaria</Form.Label>
                            <Form.Control type="text" onChange={(e) => confeitaria.descricao = e.target.value }/>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" onChange={(e) => confeitaria.telefone = e.target.value }/>

                            <Form.Label>Celular</Form.Label>
                            <Form.Control type="text" onChange={(e) => confeitaria.celular = e.target.value }/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Logo da confeitaria</Form.Label>
                            <Form.Control type='file' onChange={ (e) => confeitaria.logo_url = e.target.files[0] }/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSave}>
                            Salvar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}