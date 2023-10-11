const dotenv = require("dotenv");
dotenv.config();
const MongoClient = require("mongodb").MongoClient;

let db;

const initDb = (callback) => {
  if (db) {
    console.log("Database already initialized");
    return callback(null, db);
  }
  MongoClient.connect(process.env.MONGO_URI)
    .then((client) => {
      db = client;
      callback(null, db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!db) {
    throw Error("Database is not intialized");
  }
  return db;
};

module.exports = {
  initDb,
  getDb
};
