const {Schema, model}= require('mongoose')

const donationSchema = new Schema({
    provider:{ type: String,default:"metamask"},
    hash: { type: String},
    email:{type: String,default:"anonimated"},
    created_at:{ type: Date, default:Date.now}

})

module.exports = model('donation',donationSchema)