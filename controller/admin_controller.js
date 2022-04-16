const Admin = require("../database/models/admin_management/admin");

const index = (req, resp, next) => {
  if (req.session.admin) {
    resp.render("dashboard",{user:'admin'});
  }
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
  Admin.findOne({ name: req.body.email }).then((admin) => {
    if (admin) {
      admin.validation(req.body.password).then((passwordMatch) => {
        if (passwordMatch) {
          req.session.admin = admin.id;
          resp.redirect("/");
        } else {
          resp.send("incorrect password");
        }
      });
    } else {
      resp.send("admin doesnot exit");
    }
  });
};


module.exports = {
  index,
  login,
  authenticate_authorize,
  logout,
};
