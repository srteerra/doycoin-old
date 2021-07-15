const router = require('express').Router()
const passport = require('passport')
const jwt  = require('jsonwebtoken')
const {authjwt} = require('../middlewares')


/*router.post("/donated",authjwt.verifyToken,async(req,res,next)=>{
    wallet.sendDonation(req.body)
    res.status(200).send("ok")
})*/

router.post("/authorization",async(req,res,next)=>{
    var token = jwt.sign({ Auth: 'doycoin' }, process.env.TOKEN_KEY);
    res.header('Authorization',token)
    res.status(200).send('ok')
})

router.post("/address",async(req,res,next)=>{
    res.status(200).json({address:process.env.RECIVER_ADDRESS})
})

module.exports = router