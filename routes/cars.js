const router = require("express").Router();
const carsController = require("../controller/cars");
const { carValidation, validate } = require("../validation/validator");
const { requiresAuth } = require("express-openid-connect");

router.get("/", requiresAuth(), carsController.getCars);
router.get("/:id", requiresAuth(), carsController.getOneCar);
router.post(
  "/",
  requiresAuth(),
  carValidation(),
  validate,
  carsController.addCar
);
router.put(
  "/:id",
  requiresAuth(),
  carValidation(),
  validate,
  carsController.updateCar
);
router.delete("/:id", requiresAuth(), carsController.deleteCar);

module.exports = router;
