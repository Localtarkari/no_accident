const router = require("express").Router();
const {
  index,
  login,
  signup,
  register,
  authenticate_authorize,
  logout,
} = require("../controller/usermanagement");
const { user_exist } = require("../middleware/find_user");
const { check_sessions } = require("../middleware/check_session");

router.get("/", check_sessions, index);
router.get("/login", check_sessions, login);
router.post("/login", check_sessions, authenticate_authorize);
router.get("/signup", check_sessions, signup);
router.post("/signup", check_sessions, user_exist, register);

router.get("/logout", logout);

module.exports = router;
