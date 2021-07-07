if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()    
}
const express =  require('express')
const cors =require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const session = require('express-session')

//Initializtion
const app =express()
//Settings
app.set('port',process.env.PORT|| 3000)
//Middlewares
app.use(morgan('tiny'))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
//Routes
//Static files
app.use(express.static(path.join(__dirname,'public')))
//Start Server
app.listen(app.get('port'),()=>{
    console.log('server on port: ', app.get('port'))
})