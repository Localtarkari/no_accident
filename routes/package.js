const router2 = require("express").Router();
const {get_package,add_package,update_package} = require("../controller/package_for_user")


router2.get('/',get_package);
router2.post('/',add_package);

router2.post('/:id',update_package)


module.exports = router2;