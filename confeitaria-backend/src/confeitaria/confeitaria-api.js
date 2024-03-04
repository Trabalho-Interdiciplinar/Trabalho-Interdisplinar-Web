const express = require('express')
const multer = require('multer')
const ConfeitariaService = require('./confeitariaService')
const ImageUploader = require('../image/ImageUpload')

const router = express.Router()
const upload = multer()

const confeitariaService = new ConfeitariaService()

router.post('/confeitaria', upload.single('logo_url'), async (req, res) => {
    try {
        const imageUploader = new ImageUploader()
        const filePath = await imageUploader.upload(req.file)
        console.log(req.body)
        await confeitariaService.saveConfeitaria(req.body, filePath)
        let confeitariaId = await confeitariaService.getConfeitariaIdByUserId(req.body.usuario_id)
        res.send(confeitariaId)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

router.get('/confeitaria', (req, res) => {
    console.log(req.query.confeitaria_id)
    res.sendStatus(201)
})

module.exports = router