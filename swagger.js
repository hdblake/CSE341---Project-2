const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Cars API",
    description: "Documentation of API"
  },
  host: "cse341-project2-hjze.onrender.com",
  schemes: "https"
};

const outputFile = "./swagger.json";
const endpointFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointFiles, doc);
