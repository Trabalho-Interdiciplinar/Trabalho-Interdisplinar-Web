const DbConnection = require('../database/connection')
const bcrypt = require('bcrypt')
const firebase = require('../config/firebase')
const {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} = require("firebase/auth")

class AuthService {
    
    loginWithFirebase(email, password, onSuccess, onError){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            onSuccess(user)
        })
        .catch((error) => {
            onError(error)
        });
    }

    registerWithFirebase(email, senha, onSuccess, onError){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha)
        .then((user => {
            console.log(user);
            onSuccess(user);
        }))
        .catch((error)=> {
            console.log(error);
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