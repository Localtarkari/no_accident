const router = require("express").Router();
const { index, login, signup } = require("../controller/index_controller");

router.get("/", index);
router.get("/login", login);
router.get("/signup", signup);

module.exports = router;
