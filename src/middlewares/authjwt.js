const jwt = require('jsonwebtoken')

const verifyToken = async(req,res,next)=>{
    try{
       
        const token =req.headers["authorization"]
       
        if(!token){
            res.status(403).json({message:'Not token provided'})
        }
        
        const decoded =jwt.verify(token,process.env.TOKEN_KEY)
        
        if(!decoded.Auth && decoded.Auth !== 'doycoin'){
            res.status(401).json({message:'Unauthorized token'})
        }
       
        next()
    }catch(err){
        return res.status(401).json({message:'Unauthorized'})
    }
}

module.exports = {verifyToken}