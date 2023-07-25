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

//Start database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("\x1b[34;1;3mDatabase is active!"))
  .catch(console.error);
//Start server
app.listen(process.env.PORT, () => console.log("Server is active!\x1b[0m"));

//Models
const dev = require("./models/dev");

//Routing
//dev
app.get("/dev", async (req, res) => {
  //Get all messages
  const data = await dev.find();
  //Response
  res.status(202).json(data);
});
app.post("/dev/new", async (req, res) => {
  //Get id number
  const messageId =
    (await dev.findOne().sort({ _id: -1 }).limit(1)).get("id") + 1;
  //Create new message
  const data = new dev({
    message: req.body.message,
    id: messageId,
  });
  data.save();
  res.status(201).json(data);
});
