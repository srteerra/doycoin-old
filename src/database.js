const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true, 
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(db => console.log('DB is connect'))
.catch(err => console.log(err))