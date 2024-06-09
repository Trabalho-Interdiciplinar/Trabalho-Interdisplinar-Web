const express = require('express')
const cors = require('cors')

const app = express()
const auth = require('./authentication/auth-api')
const test = require('./test/test-api')
const imageUpload = require('./image/upload-image-api')
const product = require('./product/product-api')
const confeitaria = require('./confeitaria/confeitaria-api')
const perfil = require('./profile/profile-api')
const pedidos = require('./pedidos/pedidos-api')

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
})

app.use(cors())
app.use(express.json())
app.use('/auth', auth)
app.use('/test', test)
app.use('/', imageUpload)
app.use('/', product)
app.use('/', confeitaria)
app.use('/', perfil)
app.use('/', pedidos)

app.listen(3001, () => {
    console.log(`Server running at http://localhost:3001`)
})
