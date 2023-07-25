const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
});

const test = mongoose.model("test", testSchema);

module.exports = test;
