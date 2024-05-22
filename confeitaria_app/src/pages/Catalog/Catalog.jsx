import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CatalogStyle.css";
import axios from "axios";
import { CartModal } from "../../components/CartModal/index.jsx";
import { CheckoutModal } from "../../components/Checkout/index.jsx";
import { CartContext } from "../../model/Cart.jsx";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export function Catalog() {
  const { id } = useParams();
  const [produtos, setproduct] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [showCheckout, setCheckout] = useState(false);
  const [customization, setCustomization] = useState({});

  const { cartProducts, addToCart } = useContext(CartContext);

  useEffect(() => {
    console.log(id);
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
      .catch((err) => {});
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
            <h2>loja do pessoal</h2>
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
                <img src="../../src/assets/shopping-cart.svg" alt="" />
                <Badge pill bg="success" className="quant_uni">
                  {cartProducts.length}
                </Badge>
              </button>
            </div>
          </div>
        </div>
        <div className="content-catalogo">
          <div className="cardapio-catalogo">
            {produtos.map((produto) => (
              <div className="card-catalogo" key={produto.id_produto}>
                <div className="img_card">
                  <img src={produto.photoUrl} alt="" />
                </div>
                <div className="card_descript">
                  <h3 id="title">{produto.nome}</h3> 
                  <button
                    className="colocarnocarrinho"
                    onClick={() => handleShowCart(produto)}
                  >
                    COMPRAR R${produto.preco}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <footer className="footer">©sweetconnection</footer>
      </div>

      <CartModal
        show={showCart}
        handleClose={() => setShowCart(false)}
        product={selectedProduct}
        onProductSelected={(quantity) => {
          addToCart(selectedProduct, quantity);
        }}
      />

      <CheckoutModal
        show={showCheckout}
        handleClose={() => {
          setCheckout(false);
        }}
      />
    </>
  );
}
