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
<<<<<<< HEAD
require('./middlewares/SetupWallet')
=======
//require('./middlewares/SetupWallet')
>>>>>>> fd8816f2ee34a23e1955b8310c060579104035fd

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
<<<<<<< HEAD
//app.use('/api/v1',require('./routes'))
=======
app.use('/api/v1',require('./routes'))
>>>>>>> fd8816f2ee34a23e1955b8310c060579104035fd
//Static files
app.use(express.static(path.join(__dirname,'public')))
//Start Server
app.listen(app.get('port'),()=>{
    console.log('server on port: ', app.get('port'))
})