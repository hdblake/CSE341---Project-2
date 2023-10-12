const mongoDb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getCars = async (req, res, next) => {
  const results = await mongoDb.getDb().db().collection("cars").find();
  results.toArray().then((cars) => {
    res.status(200).json(cars);
  });
};

const getOneCar = async (req, res, next) => {
  const carId = new ObjectId(req.params.id);
  const results = await mongoDb
    .getDb()
    .db()
    .collection("cars")
    .find({ _id: carId });
  results.toArray().then((cars) => {
    res.status(200).json(cars[0]);
  });
};

const addCar = async (req, res) => {
  const car = {
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    trim: req.body.trim,
    color: req.body.color,
    style: req.body.year
  };

  const result = await mongoDb.getDb().db().collection("cars").insertOne(car);

  if (result.acknowledged) {
    res.status(201).json(result);
  } else {
    res
      .status(500)
      .json(
        result.error || "An error occured adding the vehicle, please try again."
      );
  }
};

const deleteCar = async (req, res) => {
  const carId = new ObjectId(req.params.id);

  const result = await mongoDb
    .getDb()
    .db()
    .collection("cars")
    .deleteOne({ _id: carId }, carId);

  if (result.deletedCount > 0) {
    res.status(201).send();
  } else {
    res
      .status(500)
      .json(
        result.error || "An error occured deleting the car, please try again."
      );
  }
};

module.exports = {
  getCars,
  getOneCar,
  addCar,
  deleteCar
};
