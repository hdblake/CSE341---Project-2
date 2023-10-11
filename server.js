const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoDb = require("./db/connect");

app
  .use(express.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use(require("./routes"));

mongoDb.initDb((err, mongoDb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Connected to Db. Listening on port: ${port}`);
    });
  }
});
