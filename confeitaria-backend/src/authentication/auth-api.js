const express = require('express')
const AuthService = require('./authService')

const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.post('/login', (req, res) => {
    const authService = new AuthService();
    authService.loginWithFirebase(req.body.email, req.body.password, (user) => {
        res.send({userId: user});
    }, (error) => {
        console.log(error);
        res.sendStatus(500);
    });
})

router.post('/register', async (req, res) => {
    const authService = new AuthService();
    authService.registerWithFirebase(req.body.email, req.body.password, (user) => {
        res.send(user);
    }, () => {
        res.sendStatus(500);
    });
})

module.exports = router