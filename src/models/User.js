const {Schema, model}= require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt')
 
const UserSchema = new Schema({
    provider:{ type: String},
    username:{ type: String,sparse:true},
    email:{ type: String, unique: [true,'email error'] },
    password:{ type: String},
})

UserSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
  
UserSchema.methods.comparePassword= function (password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.plugin(uniqueValidator, { message: 'Error, awaited {PATH} unique.' });

UserSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.pass;
    return obj;
}

module.exports = model('user',UserSchema)