import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CatalogStyle.css";
import axios from 'axios';
import { CartModal } from "../../components/CartModal/index.jsx";
import { CheckoutModal } from "../../components/Checkout/index.jsx";
import { CartContext } from "../../model/Cart.jsx";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


export function Catalog() {
    const { id } = useParams();
    const [produtos, setproduct] = useState([]);
    const [showCart, setShowCart] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState({})
    const [showCheckout, setCheckout] = useState(false)
    const [customization, setCustomization ] = useState({})

    const { cartProducts, addToCart } = useContext(CartContext)

    useEffect(() => {
        console.log(id)
        axios
            .get("http://localhost:3001/products?confeitaria_id=" + id)
            .then((result) => {
                console.log(result.data);
                setproduct(result.data);
            })
            .catch((erro) => console.log(erro));
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:3001/customization?confeitariaId=" + id)
            .then((response) => {
                console.log(response.data);
                setCustomization(response.data);
            })
            .catch((err) => { });
    }, []);

    const handleShowCart = (product) => {
        setSelectedProduct(product);
        setShowCart(true);
    };

    const handleCheckout = () => {
        setCheckout(true);
    };

    return (
        <>
            <div className="container-catalogo">
                 <div className="navbar-catalogo">
                    <div className="logo-catalogo">
                        <img
                            src={customization.url_imagem || "../../public/vite.svg"}
                            alt=""
                            height={150}
                        />
                    </div>
                    <div className="opcoes">
                        <select className="select">
                            <option value="">todos</option>
                            <option value="">cafe</option>
                            <option value="">bolo</option>
                            <option value="">doces</option>
                            <option value="">copos</option>
                        </select>
                        <div className="cart-catalogo">
                            <button onClick={handleCheckout}>
                                CARRINHO 
                                <Badge pill bg="success">
                                    {cartProducts.length}
                                </Badge>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content-catalogo">
                    <div
                        className="cardapio-catalogo"
                        style={{ background: customization.cor_secundaria }}
                    >
                        {produtos.map((produto) => (
                            <div
                                className="card-catalogo"
                                style={{ background: customization.cor_primaria }}
                                key={produto.id_produto}
                            >
                                <img src={produto.photoUrl} alt="" height={150} />
                                <h3>{produto.nome}</h3>
                                <p>{produto.descricao}</p>
                                <h3>R${produto.preco}</h3>
                                <button className="colocarnocarrinho"onClick={() => handleShowCart(produto)}>COLOCAR NO CARRINHO</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <CartModal show={showCart} handleClose={() => setShowCart(false)} product={selectedProduct} onProductSelected={(quantity) => { addToCart(selectedProduct, quantity) }} />

            <CheckoutModal show={showCheckout} handleClose={() => { setCheckout(false) }} />
        </>
    );
}
