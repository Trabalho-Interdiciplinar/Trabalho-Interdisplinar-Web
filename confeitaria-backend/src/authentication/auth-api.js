const express = require('express')
const PasswordEncrypt = require('./password-encrypt')
const AuthService = require('./authService')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.post('/login', (req, res) => {
    const authService = new AuthService()
    console.log(req.body)
    authService.login(req.body.email, req.body.password, (userId, confeitariaId) => {

        console.log("returning: " + {userId: userId})
        res.send({userId: userId, idConfeitaria: confeitariaId})
        
    }, () => {
        res.sendStatus(500)
    })
})

router.post('/register', async (req, res) => {
    const passwordEncrypt = new PasswordEncrypt()
    const authService = new AuthService()
    try {
        await authService.registerWithAsync(req.body.email, passwordEncrypt.encrypt(req.body.password), req.body.nomeDono, req.body.nomeEmpresa)
        let userId = await authService.getUserId(req.body.email)
        res.send(userId)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

module.exports = router