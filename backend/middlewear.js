const JWT_SECRET = require('./config')
const jwt = require('jsonwebtoken')

const authToken = (req, res, next) => {

    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(403).json({message:"You are not authorized to access"})
        return 
    }else{

        const token = authHeader.split(' ')[1]
        
        jwt.verify(token, JWT_SECRET, (err, decode)=>{

            if(err || !decode.userId){
                res.status(403).json({message:"You are not authorised"})
                return
            }else{
                req.userId = decode.userId
                next()
            }
        })
    }
}

module.exports = {
    middleWear:authToken
}