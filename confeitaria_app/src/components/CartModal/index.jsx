import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

export function CartModal({ show, handleClose, product, onProductSelected }){
    const [quantity, setQuantity] = useState(1)

    return (
        <>
            <Modal show={show} onHide={handleClose} centered aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title>Carrinho</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={12}>
                            <Image src={product.photo_url} thumbnail />
                        </Col>
                        <Col xs={12}>
                            {product.descricao}
                        </Col>
                        <Col xs={12}>
                            R$ {product.preco}
                        </Col>

                        <Row>
                            <Col xs={3}><Button onClick={() => setQuantity(quantity-1 >= 0 ? quantity-1 : quantity)}>-</Button></Col>
                            <Col xs={6}>{quantity}</Col>
                            <Col xs={3}><Button onClick={() => setQuantity(quantity+1)}>+</Button></Col>
                        </Row>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {
                        onProductSelected(quantity) 
                        handleClose()
                        } 
                    }>Adicionar ao carrinho</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}