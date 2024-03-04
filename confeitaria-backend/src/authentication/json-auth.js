const jwt = require('jsonwebtoken')

module.exports = async(request, response, next) => {
    try{
        const token = await request.headers.authorization.split(" ")[1]
        request.user = jwt.verify(token, "jwt-token").decodedToken
        next()
    }catch(error){
        response.status(401).json({error: new Error("Invalid request")})
    }
}
