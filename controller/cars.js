const mongoDb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getCars = async (req, res, next) => {
  const results = await mongoDb.getDb().db().collection("cars").find();
  results.toArray().then((cars) => {
    res.status(201).json(cars);
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

module.exports = {
  getCars,
  getOneCar
};
