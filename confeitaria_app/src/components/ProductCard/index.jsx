import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { CardDetail } from '../CardDetail';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import "./card-detalhes.css";

export function ProductDetail({ product }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(fechar);
    const handleShow = () => setShow(true);

    // return (
    //     <>
    //         <Col xs={12} md={6} lg={4} xl={4} xxl={3} onClick={handleShow} className = 'card-detalhes'>
    //             <Card style={{ margin: 2, height: 400 }} >
    //                     <Card.Img variant="top" src={product.photoUrl} style={{ width: '100%', height: 150, objectFit: 'contain' }} />
    //                 <Card.Body>
    //                     <Card.Title>{product.nome}</Card.Title>
    //                     <hr/>
    //                     <Card.Text style={{ maxLines: 2, textOverflow: 'ellipsis', lineClamp: 2, overflow: 'hidden' }}>{product.descricao}</Card.Text>
    //                 </Card.Body>
    //                 <Card.Footer>
    //                     <Card.Subtitle>R$ {product.preco}</Card.Subtitle>
    //                     <Stack direction='horizontal' gap={2} style={{paddingTop: 4}}>
    //                         <Badge bg="dark">Bolo</Badge>
    //                         <Badge bg="dark">Doce</Badge>
    //                         <Badge bg="dark">Dark</Badge>
    //                     </Stack>
    //                 </Card.Footer>
    //             </Card>
    //         </Col>

    //         <CardDetail show={show} handleClose={handleClose} product={product}/>
    //     </>
    // )
    return (
        <div className="card-detalhes" onClick={handleShow}>
            <div className="card-img">
                <img src={product.photoUrl} className='img-card' alt="" />
            </div>
            <div className="card-name">
                <title><h4>{product.nome}</h4></title>
            </div>
            <div className="card-descricao">
                <p>{product.descricao}</p>
            </div>
            <div className="footer">
                <div className="card-preco">
                    {product.preco}
                </div>
            </div>
            <CardDetail show={show} handleClose={handleClose} product={product}/>
        </div>
    )
}