const DbConnection = require('../database/connection')

class ProfileService{
    async fetchProfile(userId){
        let result = await new DbConnection().executeAsync(
            `SELECT * FROM confeitaria where id_confeitaria = ${userId}`
        )

        return result.rows[0]
    }

    async fetchConfeitaria(){
        
    }
}

module.exports = ProfileService