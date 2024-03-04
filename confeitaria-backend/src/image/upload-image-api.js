const express = require('express')
const serverUpload = require('./ImageUpload')
const multer = require('multer')
const upload = multer()

const router = express.Router()

router.post('/upload-product', upload.single('product'), async (req, res) => {
    const imageUploader = new serverUpload()

    fileName = await imageUploader.upload(req.file)
    res.send({'fileName': fileName })
})

module.exports = router