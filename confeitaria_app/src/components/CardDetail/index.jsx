import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function CardDetail({ show, handleClose, product }) {

    const [habilitado, setHabilitado] = useState()

    const handleToggleHabilitado = () => {
        console.log(product)
        axios.patch('http://localhost:3001/product?productId='+product.id_produto+"&habilitado="+ !(product.habilitado))
        .then(response => {
            console.log(response)
            product.habilitado = !(product.habilitado)
            setHabilitado(product.habilitado)
        })
        .catch(err => {})
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} centered aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title>{product.nome}</Modal.Title>
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
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleToggleHabilitado}>{product.habilitado ? "Desabilitar" : "Habilitar"}</Button>
                    <Button variant="primary" onClick={handleClose}>Fechar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}