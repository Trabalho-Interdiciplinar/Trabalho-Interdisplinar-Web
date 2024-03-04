const DbConnection = require('../database/connection')
const bcrypt = require('bcrypt')

class AuthService {
    login(email, password, onLogin, onError){
        new DbConnection().execute(`
            select u.id_usuario , u.senha, c.id_confeitaria  from usuario u inner join confeitaria c on u.id_usuario = c.fk_id_usuario where u.email  = '${email}'`, (result) => {
            if(result.length == 0){
                onError()
            } else {
                console.log(result.rows[0]);
                // console.log(result.rows[0].id_confeitaria);
                const samePassword = bcrypt.compareSync(password, result.rows[0].senha)
                if(samePassword){
                    onLogin(result.rows[0].id_usuario, result.rows[0].id_confeitaria)
                } else {
                    onError()
                }
            }
        }, (error) => {
            console.log(error)
            onError()
        })
    }

    register(email, password, nomedono, nomeempresa, cnpj, onRegister, onError){
        new DbConnection().execute(`INSERT INTO usuario (email, senha, nomedono, nomeempresa, cnpj) VALUES
        ('${email}', '${password}', '${nomedono}', '${nomeempresa}', '${cnpj}')`, (result) => {
            console.log(result)
            onRegister()
        }, (error) => { 
            console.log(error)
            onError()
        })
    }

    async registerWithAsync(email, password, nomedono, nomeempresa, cnpj){
        let result = await new DbConnection().executeAsync(`INSERT INTO usuario (email, senha, nomedono, nomeempresa, cnpj) VALUES
        ('${email}', '${password}', '${nomedono}', '${nomeempresa}', '${cnpj}')`)
        console.log(result)
        return result.rows[0]
    }

    async getUserId(email){
        let result = await new DbConnection().executeAsync(`SELECT id_usuario from usuario where email = '${email}'`)
        return result.rows[0]
    }
}

module.exports = AuthService