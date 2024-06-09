import axios from 'axios'
import { createContext, useEffect, useState } from "react";
import { User } from './User'

export const CartContext = createContext()

const user = new User()

export const CartProvider = ({children}) => {
    const [cartProducts, setProducts] = useState(JSON.parse(localStorage.getItem('carrinho')) || [])

    const addToCart = (product, quantity) => {
        const productInCart = cartProducts.find(p => p.id_produto === product.id_produto)
        if(productInCart){
            setProducts(
                cartProducts.map(p => product.id_produto === p.id_produto ? {...p, quantity: p.quantity + quantity} : p)
            )
        } else {
            setProducts([...cartProducts, {...product, quantity: quantity}])
        }
    }

    const removeProduct = (product) => {
        setProducts(cartProducts.filter(item => item.id_produto !== product.id_produto))
    }

    const cartSum = () => {
        return cartProducts.reduce((sum, product) => sum + Number(product.preco) * product.quantity, 0)
    }

    const clearCart = () => {

    }


    const carteResume = () => {
        saveProductInHistory()
        let resume = "Olá! Quero fazer o pedido dos seguintes itens: %0a%0a"
        resume += cartProducts.map(product => product.nome + " " + product.quantity  + " unidade(s)." + "%0a")
        resume += "%0aTotalizando R$ " + cartSum();
        return resume
    }

    const saveProductInHistory = () => {
        const saveProduct = (product) => {
            axios.post(
                'http://localhost:3001/pedidos?user_id=' + user.getUserId(),
                product,
                { headers: { 'Content-Type': 'application/json' } }
            ).then(response => {
                console.log(product);
                alert('Produto salvo!');
            }).catch(err => console.log(err));
        };

        cartProducts.forEach(product => saveProduct(product));
    };


    useEffect(() => {
        localStorage.setItem('carrinho', JSON.stringify(cartProducts))
    }, [cartProducts])

    return (
        <CartContext.Provider 
        value={{cartProducts, addToCart, cartSum, removeProduct, clearCart, carteResume}}>
            {children}
        </CartContext.Provider>
    )
}