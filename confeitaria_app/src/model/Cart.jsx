import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

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
        let resume = "Olá! Quero fazer o pedido dos seguintes itens: %0a%0a"
        resume += cartProducts.map(product => product.nome + " " + product.quantity  + " unidade(s)." + "%0a")
        resume += "%0aTotalizando R$ " + cartSum();
        return resume
    }

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