const pg = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const pool = new pg.Pool({
    host: "confeitaria-postgresql.postgres.database.azure.com",
    port: 5432,
    database: "postgres",
    user: "confeitariaadm@confeitaria-postgresql",
    password: "c7e3cccec97e66db314ac2d9cf67cdd5aae4b79b!",
    ssl: true
})

class DbConnection {
    async execute(q, resultData, onError) {
        pool.connect()
            .then(client => {
                return client.query(q).then(res => {
                    resultData(res)
                    client.release()
                })
                    .catch(e => {
                        client.release()
                        console.log(e)
                        onError(e)
                    })
            })
    }

    async executeAsync(q){
        let client = await pool.connect()
        let result = await client.query(q)
        client.release()
        return result
    }
}

module.exports = DbConnection