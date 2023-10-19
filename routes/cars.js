const router = require("express").Router();
const carsController = require("../controller/cars");
const { carValidation, validate } = require("../validation/validator");

router.get("/", carsController.getCars);
router.get("/:id", carsController.getOneCar);
router.post("/", carValidation(), validate, carsController.addCar);
router.put("/:id", carValidation(), validate, carsController.updateCar);
router.delete("/:id", carsController.deleteCar);

module.exports = router;
