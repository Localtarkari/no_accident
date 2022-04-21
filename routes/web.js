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
  apply_for_device,
  update_user_contact,
  update_profile,
  change_profile_pic
} = require("../controller/usermanagement");

const { user_exist } = require("../middleware/find_user");
const { check_sessions} = require("../middleware/check_session");
const { check_access_sessions } = require("../middleware/check_access_session");



const multer = require('multer');

const storage = multer.diskStorage({
  //store excel file
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, "profile" + file.originalname);
  },
});

const upload = multer({ storage: storage });


router.get("/", check_sessions, index);

router.post("/", check_sessions, index);
// router.get("/",(req,resp)=>{
//   resp.render('vehicle_apply')
// })
router.get("/login", check_sessions, login);
router.post("/login", check_sessions, authenticate_authorize);
router.get("/signup", check_sessions, signup);
router.post("/signup", check_sessions, user_exist, register);

router.get("/user",check_access_sessions,user)
router.get("/guides",check_access_sessions,guides)
router.get("/apply",check_access_sessions,apply_for_device)
router.get("/logout", logout);


router.get("/profile",check_access_sessions,profile)
router.post("/updateuser/:id",check_access_sessions,update_profile); //update user
router.post("/updateuser/updatecontact/:id",check_access_sessions,update_user_contact); //update user address
router.post('/upload/:id',check_access_sessions,upload.any('profile'),change_profile_pic);

module.exports = router;
