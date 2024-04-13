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
}

module.exports = AuthService