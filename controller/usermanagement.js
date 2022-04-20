const User = require("../database/models/user_management/users");

const index = (req, resp, next) => {
  // if (req.session.user) {

  //   resp.render("dashboard",{user:req.session.user});
  // }
  resp.render("guest/index", {layout:'layouta', name: "index" });
};

const login = (req, resp, next) => {
  resp.render("guest/login",{layout:'layouta'});
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
  resp.render("guest/signup", {layout:'layouta', error: "" });
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
 resp.render('user/profile',{layout:'layoutb',user:req.session.user})
}

const user = (req,resp,next)=>{
  resp.render('user/table',{layout:'layoutb',user:req.session.user})
}

const guides =(req,resp,next)=>{
  resp.send('user/guides',{layout:'layoutb',user:req.session.user})
}

const packages = (req,resp,next)=>{
  resp.render('user/available_packages',{layout:'layoutb',user:req.session.user});
}

const apply_for_device = (req,resp,next)=>{
  resp.render('user/vehicle_apply',{layout:'layoutb',user:req.session.user});
}


module.exports = {
  index,
  login,
  signup,
  register,
  authenticate_authorize,
  logout,
  profile,
  user,
  guides,
  packages,
  apply_for_device
};
