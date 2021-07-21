const router = require('express').Router()
const jwt  = require('jsonwebtoken')
const {authjwt} = require('../middlewares')

const Donation = require('../models/donation')

router.post("/donated",authjwt.verifyToken,async(req,res,next)=>{
    const donation= new Donation()

    donation.provider=req.body.provider
    donation.hash=req.body.transactionHash
    donation.email=req.body.email
    await donation.save()

    res.status(200).send("OK")
})

router.post("/authorization",async(req,res,next)=>{    
    var token = jwt.sign({ Auth: 'doycoin' }, process.env.TOKEN_KEY);
    res.header('Authorization',token)
    res.status(200).send('ok')
})

router.post("/address",async(req,res,next)=>{
    res.status(200).json({address:process.env.RECIVER_ADDRESS})
})


module.exports = router