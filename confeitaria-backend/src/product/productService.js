const DbConnection = require('../database/connection')
const { getFirestore, setDoc, doc, addDoc, collection, getDocs } = require('firebase/firestore')
const firebaseApp = require("../config/firebase")

class ProductService {

    async createNewProductFirebase(idUser, product, onCreated, onError) {
        const db = getFirestore(firebaseApp);
        console.log(product);
        addDoc(collection(db, "confeitaria", idUser, "products"), product)
            .then((savedProduct) => { onCreated(savedProduct) })
            .catch((error) => { onError(error) });
    }

    async fetchProductsWithFirebase(idUser, onLoad, onError) {
        const db = getFirestore(firebaseApp);
        getDocs(collection(db, "confeitaria", idUser, "products"))
            .then((items) => {
                const products = []
                items.forEach((doc) => {
                    products.push(doc.data())
                })
                onLoad(products);
            })
            .catch((error) => {
                onError(error)
            });
    }

    fetchProducts(confeitariaId, onProductsLoaded, onError) {
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

    fetchConfeitariaProducts(confeitariaId, onProductsLoaded, onError) {
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

    toggleProductEnable(productId, enable, onSuccess, onError) {
        new DbConnection().execute(
            `UPDATE produto p set habilitado = ${enable} where p.id_produto = ${productId}`,
            (result) => {
                console.log(result)
                onSuccess(result)
            },
            (err) => {
                console.log(err)
                onError(err)
            }
        )
    }
}

module.exports = ProductService