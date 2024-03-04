const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "v5w.h.filess.io",
    user: "confeitaria_authorfine",
    password: "c7e3cccec97e66db314ac2d9cf67cdd5aae4b79b",
    port: 3307,
    database: "confeitaria_authorfine"
})

export function fetchData(){
    connection.connect()
    connection.query("SELECT 1 + 1 as solution", (err, results, fields) => {
        if(err) throw err;
        console.log('Solution is: ', results[0].solution);
    })
    connection.end()    
}
