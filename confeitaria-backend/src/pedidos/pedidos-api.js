const express = require('express')
const multer = require('multer')
const PedidosService = require('./pedidosService')
const Database = require("../database/databaseRef")

const router = express.Router()
const upload = multer()
const pedidosService = new PedidosService(new Database())

router.use(express.json())

router.post('/pedidos', async (req, res) => {
    try{
        await pedidosService.createNewProductFirebase(req.query.user_id, req.body)
        res.sendStatus(201)
    }catch (exception){
        console.log(exception)
        res.sendStatus(500)
    }
})

router.patch('/pedidos', (req, res) => {
    res.sendStatus(500)
})

router.get('/pedidos', async (req, res) => {
    try{
        let products = await pedidosService.fetchProductsWithFirebase(req.query.user_id);
        console.log(products)
        res.send(products)
    }catch{
        res.sendStatus(500)
    }
})

router.get('/pedidos', async (req, res) => {
    try{
        let products = await productService.fetchProductsWithFirebase(req.query.user_id);
        console.log(products)
        res.send(products)
    }catch{
        res.sendStatus(500)
    }
})

module.exports = router