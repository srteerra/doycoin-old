const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy

const User = require('../models/User')

passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
   done(null,user)
})

passport.use('local-signup',new LocalStrategy({
    usernameField:'email',
    passwordField:'password',
    passReqToCallback:true
}, async(req, email, password,done)=>{
    try{
        const user =await User.findOne({email:email})
        if(user) return done(null,'error',{message:'Este email ya esta registrado'});

        const newUser= new User()
        newUser.provider = 'doycoin'
        newUser.email = email
        newUser.password = newUser.encryptPassword(password)
        
        const saveUser=await newUser.save()

        return done(null,true)
    
    }catch{
        return done(null,'error',{message:'Unauthorized'});
    }
    
}))