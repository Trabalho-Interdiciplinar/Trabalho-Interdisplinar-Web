import express from 'express'
import mysql from 'mysql'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  })

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: "confeitaria_authorfine",
    password: process.env.PASSWORD,
    port: 3307,
    database: "confeitaria_authorfine"
})

app.get('/api', (req, res) => {
    connection.query("SELECT 1 + 1 as solution", (err, results, fields) => {
        if(err) throw err;
        console.log('Solution is: ', results[0].solution);
        res.json({ solution : results[0].solution })
    })
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running at http:localhost:${process.env.SERVER_PORT}`)
})