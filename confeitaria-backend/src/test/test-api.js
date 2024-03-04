const express = require('express')
const auth = require('../authentication/json-auth')

const router = express.Router()

router.get('/', auth, (req, res) => {
    res.send("authorized")
})

module.exports = router