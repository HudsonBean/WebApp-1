const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const devSchema = new Schema({
  message: { type: String, required: true },
  id: { type: Number, required: true, default: 0, get: (v) => Math.round(v) },
});

const dev = mongoose.model("dev", devSchema);

module.exports = dev;
