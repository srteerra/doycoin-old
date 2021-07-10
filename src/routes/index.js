const router = require('express').Router()
const passport = require('passport')

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
})

module.exports = router