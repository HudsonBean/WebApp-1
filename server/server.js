//Modules
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Variables
const app = express();

//Functions

//Main

//Middleware
app.use(express.json());
app.use(cors());

//Api & DB start
//Start MongoDb database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to \x1b[31;47;1mDatabase\x1b[0m`))
  .catch(console.error);
//Start server
app.listen(process.env.PORT, () =>
  console.log(
    `Server started at \x1b[34;4;1mhttp://localhost:${process.env.PORT}/\x1b[0m`
  )
);

//Models
const test = require("./models/test");

app.get("/test", async (req, res) => {
  const data = await test.find();

  res.json(data);
});
