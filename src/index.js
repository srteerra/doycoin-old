if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()    
}
const express =  require('express')
const cors =require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const session = require('express-session')
const passport = require('passport')


//--->Initializtion
const app =express()
//require('./database')
//require('./lib/SetupAuth')
require('./middlewares/SetupWallet')

//----->Settings
app.set('port',process.env.PORT|| 3000)
//---->Middlewares
app.use(morgan('tiny'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser());
app.use(session({
    secret:'secretsession',
    cookie:{
        maxAge:600000,
        secure:false,
    },
    name:'_sid',
    resave:false,
    saveUninitialized:false,
    unset:'destroy'
}))
app.use(passport.initialize())
app.use(passport.session())
//app.use(wallet.Connect)

//Routes
//app.use('/api/v1',require('./routes'))
//Static files
app.use(express.static(path.join(__dirname,'public')))
//Start Server
app.listen(app.get('port'),()=>{
    console.log('server on port: ', app.get('port'))
})