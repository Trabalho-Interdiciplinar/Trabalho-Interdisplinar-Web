const express = require('express')
const multer = require('multer')
const ImageUploader = require('../image/ImageUpload')
const ProductService = require('./productService')

const upload = multer()
const router = express.Router()
const productService = new ProductService()

router.post('/product', upload.single('productImage'), async (req, res) => {
    const imageUploader = new ImageUploader()
    const filePath = await imageUploader.uploadWithFirebase(req.file)

    console.log(filePath)

    const product = {
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao,
        photoUrl: filePath,
    }

    productService.createNewProductFirebase(
        product,
        (result) => { res.sendStatus(201) },
        (error) => { res.sendStatus(501) }
    )
})

router.patch('/product', (req, res) => {
    productService.toggleProductEnable(
        req.query.productId, 
        req.query.habilitado,
        (result)=>{
            res.send(true)
        }, 
        (err)=>{
            res.sendStatus(500)
        }
    )
})

router.get('/products', (req, res) => {
    productService.fetchProductsWithFirebase(
        (produtcs) => { 
            console.log(produtcs)
            res.send(produtcs) 
         }
    );
})

router.get('/loja/products', (req, res) => {
    //console.log(req.query.confeitaria_id)
    productService.fetchProductsWithFirebase(
        (result) => { 
            console.log(result)
            res.send(result) 
        }
    );
    /*
    productService.fetchConfeitariaProducts(
        req.query.confeitaria_id, 
        (result) => { res.send(result) }, 
        (error) => { res.sendStatus(500) }
    )
    */
})

module.exports = router