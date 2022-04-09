const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
  });

userSchema.pre("save",function(next){
    let user = this;
    bcrypt.hash(user.password,10).then(hash=>{
        user.password = hash;
        next();
    }).catch(err=>{
        console.log('error');
        next(err)
    });
})
userSchema.methods.validation = async function(inputPassword){
    let passwordHash = await bcrypt.hash(this.password,10); //need this to works
    return await bcrypt.compare(inputPassword,passwordHash)
}

module.exports = mongoose.model('User',userSchema)

