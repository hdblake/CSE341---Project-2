const router = require("express").Router();
const carsController = require("../controller/cars");

router.get("/", carsController.getCars);
router.get("/:id", carsController.getOneCar);
router.post("/", carsController.addCar);
router.put("/:id", carsController.updateCar);
router.delete("/:id", carsController.deleteCar);

module.exports = router;
