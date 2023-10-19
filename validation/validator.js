const { body, validationResult } = require("express-validator");

const carValidation = () => {
  return [
    body("year").notEmpty(),
    body("make").notEmpty(),
    body("model").notEmpty(),
    body("trim").notEmpty(),
    body("color").notEmpty(),
    body("style").notEmpty()
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  res.send({ errors: errors.array() });
};

module.exports = {
  carValidation,
  validate
};
