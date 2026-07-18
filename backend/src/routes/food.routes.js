const express = require('express');
const foodController = require("../controllers/food.controllers")
const authMiddleware = require("../middlewares/auth.middleware")
const router = express.Router();
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
})

//* Post /api/food/ [protected]*/
router.post('/',
    authMiddleware.authFoodPartnerMiddleware,
    upload.single("video"),
    foodController.createFood)



//* Get /api/food/list [protected]* //
router.get("/",
    authMiddleware.authUserMiddleware,
    foodController.getFoodItems)

module.exports = router