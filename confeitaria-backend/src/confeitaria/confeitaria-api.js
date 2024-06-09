const express = require('express')
const multer = require('multer')
const ConfeitariaService = require('./confeitariaService')
const ImageUploader = require('../image/ImageUpload')

const router = express.Router()
const upload = multer()

const confeitariaService = new ConfeitariaService()

// router.post('/confeitaria', upload.single('logo_url'), async (req, res) => {
//     try {
//         const imageUploader = new ImageUploader()
//         const filePath = await imageUploader.upload(req.file)
//         console.log(req.body)
//         await confeitariaService.saveConfeitaria(req.body, filePath)
//         let confeitariaId = await confeitariaService.getConfeitariaIdByUserId(req.body.usuario_id)
//         res.send(confeitariaId)
//     } catch (error) {
//         console.log(error)
//         res.status(500).send(error)
//     }
// })

router.get('/confeitarias', async (req, res) => {
    //let a = await confeitariaService.saveCatalog("123")
    //console.log(a)
    // confeitariaService.fetchConfeitarias(()=>{}, ()=>{})
    res.sendStatus(201)
})

router.post('/confeitaria', upload.single('logo_url'), async (req, res) => {
    const imageUploader = new ImageUploader()
    const filePath = await imageUploader.uploadWithFirebase(req.file)

    req.body.logo_url = filePath

    confeitariaService.saveProfile(
        req.body,
        (savedConfeitaria) => { res.send(savedConfeitaria) },
        (error) => { res.status(500).send(error) }
    )
})

router.get('/confeitaria', async (req, res) => {
    confeitariaService.fetchConfeitaria(
        req.query.confeitaria_id,
        (confeitaria) => {
            console.log(confeitaria)
            res.send(confeitaria)
        },
        (error) => {
            res.status(500).send(error)
        }
    )
})

router.get('/verlojas', async (req, res) => {
    await confeitariaService.fetchConfeitarias(async (products) => {
        console.log(products)
        res.send(products)
    }, (error) => {
        console.log(error)
        res.sendStatus(500)
    })
})

module.exports = router