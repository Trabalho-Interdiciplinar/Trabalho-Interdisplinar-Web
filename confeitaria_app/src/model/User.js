export class User {
    saveUser(credentials){
        localStorage.setItem('user',JSON.stringify(credentials))
    }

    saveConfeitaria(credentials){
        localStorage.setItem('confeitaria', JSON.stringify(credentials))
    }

    getUserId(){
        return JSON.parse(localStorage.getItem('user')).id_usuario
    }

    getConfeitariaId(){
        return JSON.parse(localStorage.getItem('confeitaria')).id_confeitaria
    }

    signOut(){
        localStorage.removeItem('user')
        localStorage.removeItem('carrinho')
        localStorage.removeItem('confeitaria')
    }
}
