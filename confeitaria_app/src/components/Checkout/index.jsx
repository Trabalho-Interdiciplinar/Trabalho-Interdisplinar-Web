import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Trash } from "@phosphor-icons/react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../model/Cart';
import "./style.css"

export function CheckoutModal({show, contact, handleClose}) {

    const { cartProducts , cartSum, removeProduct, carteResume } = useContext(CartContext)

    const redirectToConfeitaria = () => {
        window.open("http://wa.me/" + contact + "?text=" + carteResume(), "_blank")
    }

    return (
        <>
            <Modal show={show} onHide={()=> handleClose()} centered className='modal-container'>
                <div className='modal-content'>
                    <Modal.Header closeButton className='close-button'>
                        <Modal.Title>Checkout</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            {cartProducts.map(product => (
                                <>
                                    <Col xs={10} key={product.id}>
                                        <Row>
                                            <Col xs={12}>Item: {product.nome} (R$ {product.preco})</Col>
                                            <Col xs={12}>Quantidade: {product.quantity}</Col>
                                            <Col xs={12}>SubTotal: R$ {Number(product.preco)*product.quantity}</Col>
                                        </Row>
                                    </Col>
                                    <Col xs={2}>
                                        <Trash size={32} onClick={() => removeProduct(product)}/>
                                    </Col>
                                    <hr />
                                </>
                            ))}

                            <Col>Total: R$ {cartSum()}</Col>    
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={()=> redirectToConfeitaria()}>Fazer Pedido</Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    );
}
