const express = require('express')
const multer = require('multer')
const ImageUploader = require('../image/ImageUpload')
const ProductService = require('./productService')
const Database = require("../database/databaseRef")

const upload = multer()
const router = express.Router()
const productService = new ProductService(new Database())

router.post('/product', upload.single('productImage'), async (req, res) => {
    try{
        req.body.photoUrl = await (new ImageUploader()).uploadWithFirebase(req.file)
        await productService.createNewProductFirebase(req.query.confeitaria_id, req.body)
        res.sendStatus(201)
    }catch (exception){
        console.log(exception)
        res.sendStatus(500)
    }
})

router.patch('/product', (req, res) => {
    res.sendStatus(500)
})

router.get('/products', async (req, res) => {
    try{
        let products = await productService.fetchProductsWithFirebase(req.query.confeitaria_id);
        console.log(products)
        res.send(products)
    }catch{
        res.sendStatus(500)
    }
})

router.get('/loja/products', async (req, res) => {
    try{
        let products = await productService.fetchProductsWithFirebase(req.query.confeitaria_id);
        res.send(products)
    }catch{
        res.sendStatus(500)
    }
})

module.exports = router