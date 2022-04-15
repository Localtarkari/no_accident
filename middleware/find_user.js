const User = require("../database/models/user_management/users");

const user_exist = (req, resp, next) => {
  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (user) {
      resp.render("signup",{error:'email exists'});
    } else {
      next();
    }
  });
};

module.exports = {
  user_exist,
};
