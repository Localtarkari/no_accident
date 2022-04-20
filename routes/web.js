const router = require("express").Router();
const {
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
} = require("../controller/usermanagement");
const { user_exist } = require("../middleware/find_user");
const { check_sessions} = require("../middleware/check_session");
const { check_access_sessions } = require("../middleware/check_access_session");

router.get("/", check_sessions, index);
// router.get("/",(req,resp)=>{
//   resp.render('vehicle_apply')
// })
router.get("/login", check_sessions, login);
router.post("/login", check_sessions, authenticate_authorize);
router.get("/signup", check_sessions, signup);
router.post("/signup", check_sessions, user_exist, register);
router.get("/profile",check_access_sessions,profile)
router.get("/user",check_access_sessions,user)
router.get("/guides",check_access_sessions,guides)
router.get("/packages",check_access_sessions,packages)
router.get("/apply",check_access_sessions,apply_for_device)
router.get("/logout", logout);


module.exports = router;
