const res = require("express/lib/response");
const User = require("../database/models/users");

const index = (req, resp, next) => {
   resp.render("index", { name: "index" });
};

const login =(req,resp,next)=>{
  User.findOne({name:'hukum'}).then(user=>{
    if(user){
      user.validation('abc').then(passwordMatch=>{
       if(passwordMatch){
         resp.render('dashboard')
       }
      })
    }
  })
   
}
const signup =(req,resp,next)=>{
    const newUser = new User(
      {name:'hukum',password:'abc',email:'email'})
    newUser.save((err,data)=>{
      if (err) console.log(err);
      console.log(data)
    })
    resp.render("signup")
}
module.exports = { index,login,signup };
