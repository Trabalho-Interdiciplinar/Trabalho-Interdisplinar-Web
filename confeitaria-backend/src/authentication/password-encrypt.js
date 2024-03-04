const bcrypt = require('bcrypt')

class PasswordEncrypt {
    encrypt(password){
        return bcrypt.hashSync(password, 10)
    }
}

module.exports = PasswordEncrypt