const User = require("../database/models/user_management/users");

const index = (req, resp, next) => {
  // if (req.session.user) {

  //   resp.render("dashboard",{user:req.session.user});
  // }
  resp.render("index", { name: "index" });
};

const login = (req, resp, next) => {
  resp.render("login");
};

const logout = (req, resp, next) => {
  req.session.destroy((err) => {
    if (err) return err;
  });
  resp.redirect("/");
};


const authenticate_authorize = (req, resp, next) => {
  console.log(req.body.password)
  User.findOne({ name: req.body.email }).then((user) => {
    if (user) {
      user.validation((req.body.password).toString()).then((passwordMatch) => {
        if (passwordMatch) {
          req.session.user = user;
          resp.redirect("/");
        } else {
          resp.send("incorrect password");
        }
      });
    } else {
      resp.send("user doesnot exit");
    }
  });
};

const signup = (req, resp, next) => {
  resp.render("signup", { error: "" });
};


const register = (req, resp, next) => {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    phonenumber: req.body.number,
  });
  newUser.save((err, data) => {
    if (err) console.log("la la ", err);
    req.session.user = data;
    resp.redirect("/");
  });
};

const profile = (req,resp,next)=>{
 resp.render('profile',{user:req.session.user})
}

const user = (req,resp,next)=>{
  resp.render('table')
}
module.exports = {
  index,
  login,
  signup,
  register,
  authenticate_authorize,
  logout,
  profile,
  user
};
