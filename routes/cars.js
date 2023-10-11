const router = require("express").Router();
const carsController = require("../controller/cars");

router.get("/", carsController.getCars);
router.get("/:id", carsController.getOneCar);

module.exports = router;
