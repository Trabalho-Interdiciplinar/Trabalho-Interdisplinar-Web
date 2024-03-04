const DbConnection = require('../database/connection')

class ProductService {

    createNewProduct(product, onCreated, onError){
        console.log(product)
        new DbConnection().execute(`INSERT INTO produto (nome, preco, descricao, photo_url, fk_confeitaria_id) VALUES('${product.nome}', ${Number(product.preco)}, '${product.descricao}', '${product.photoUrl}', ${product.confeitariaId})`, (result) => {
            if(result.length == 0){
                onError()
            } else {
                onCreated()
            }
        }, (error) => {
            console.log(error)
            onError()
        })
    }

    fetchProducts(confeitariaId, onProductsLoaded, onError){
        new DbConnection().execute(
            `select * from produto as p where fk_confeitaria_id = ${confeitariaId} and p.habilitado = true order by id_produto desc`, 
            (result) => {
                console.log(result)
                onProductsLoaded(result.rows)
            },
            (error) => {
                console.log(error)
                onError()
            }
        )
    }

    fetchConfeitariaProducts(confeitariaId, onProductsLoaded, onError){
        new DbConnection().execute(
            `select * from produto as p where fk_confeitaria_id = ${confeitariaId} order by id_produto desc`, 
            (result) => {
                console.log(result)
                onProductsLoaded(result.rows)
            },
            (error) => {
                console.log(error)
                onError()
            }
        )
    }

    toggleProductEnable(productId, enable, onSuccess, onError){
        new DbConnection().execute(
            `UPDATE produto p set habilitado = ${enable} where p.id_produto = ${productId}`,
            (result)=>{ 
                console.log(result)
                onSuccess(result)
             },
            (err)=>{
                console.log(err)
                onError(err)
            }
        )
    }
}

module.exports = ProductService