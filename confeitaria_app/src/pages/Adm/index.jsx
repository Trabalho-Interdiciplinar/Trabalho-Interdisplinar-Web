import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import { ProductDetail } from "../../components/ProductCard"
import { User } from "../../model/User"

export function HomeAdm() {
    const user = new User()
    const { id } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        
        axios.get('http://localhost:3001/loja/products?confeitaria_id=' + user.getConfeitariaId())
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <h1>Gerenciar produtos da sua loja</h1>
            <Row style={{marginBottom: 16}}>
                {products.map(product => (
                    <ProductDetail product={product} key={product.id_produto}/>
                ))}

                {products.length > 0 ? "" : "Nenhum produto cadastrado"}
            </Row>
        </>
    )
}