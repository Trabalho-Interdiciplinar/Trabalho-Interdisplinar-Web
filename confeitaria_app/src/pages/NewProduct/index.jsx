import axios from 'axios'
import './style.css'
import { User } from '../../model/User'

export function NewProduct() {

    const user = new User()

    const product = {
        nome: '',
        descricao: '',
        preco: '',
        productImage: ''
    }

    const saveProduct = (e) => {
        e.preventDefault()
        axios.post(
            'http://localhost:3001/product?confeitaria_id=' + user.getConfeitariaId(),
            product,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        ).then(response => alert('Produto salvo!'))
            .catch(err => console.log(err))
        console.log(product)
    }

    return (
        <>
            <h2 className='title'>Cadastro de produto</h2>
            <form className='new-product-form' encType='multipart/form-data'>
                <div className='first-content'>
                    <input type="text" placeholder="nome" name="nome" id="nome" onChange={(e) => { product.nome = e.target.value }} />
                    <textarea placeholder="Escreva uma breve descrição do seu produto" name="descricao" id="descricao" onChange={(e) => { product.descricao = e.target.value }} />
                </div>

                <div className='second-content'>
                    <input type="text" placeholder='preço' onChange={(e) => { product.preco = e.target.value }} />
                    <input type="file" placeholder='imagens' onChange={(e) => { product.productImage = e.target.files[0] }} />
                </div>
                <div className='footer'>
                    <button type='button' className='cancel'>cancelar</button>
                    <button type='submit' className='save-button' onClick={saveProduct}>Salvar</button>
                </div>
            </form>
        </>
    )
}
