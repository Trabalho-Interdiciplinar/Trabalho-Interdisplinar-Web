const express = require('express')
const multer = require('multer')
const CustomizationService = require('./customizationService')
const ImageUploader = require('../image/ImageUpload')

const router = express.Router()
const customizationService = new CustomizationService()
const upload = multer()

router.post('/customization', upload.single('logo'), async (req, res) => {
    customizationService.hasCustomization(
        req.body.confeitariaId, 
        (hasConfig)=>{
            console.log(hasConfig)
            if(hasConfig){
                updateConfig(req.body, res)
            } else {
                saveNewConfig(req.body, req.file, res)
            }
        }, 
        ()=>{ res.sendStatus(500) }
    )
})

async function saveNewConfig(configuration, file, res){
    const filePath = await new ImageUploader().upload(file)
    configuration.url = filePath
    customizationService.saveCustomization(
        configuration, 
        () => { res.sendStatus(201) },
        () => { res.sendStatus(500) }
    )
}

function updateConfig(config, res){
    customizationService.updateCustomization(
        config, 
        () => { res.sendStatus(201) },
        () => { res.sendStatus(500) }
    )
}

router.get('/customization', (req, res) => {
    customizationService.fetchCustomization(
        req.query.confeitariaId,
        (result) => { res.send(result) },
        (err) => { res.sendStatus(500) }
    )
})

module.exports = router