const router = require('express').Router()
const passport = require('passport')
<<<<<<< HEAD

router.get('/',(req,res,next)=>{
    res.send('home')
    next()
})
router.get('/login',(req,res,next)=>{
    res.send('login')
    next()
})
router.post('/signup',passport.authenticate('local-signup'),async (req,res,next)=>{
    //console.log(req)
    res.send('usuario registrado')
    next()
=======
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
>>>>>>> fd8816f2ee34a23e1955b8310c060579104035fd
})

module.exports = router