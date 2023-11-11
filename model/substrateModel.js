const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const substrateSchema = new Schema({
  subName: { type: String, required: true },
  detials: { type: String, required: true },
});

const Substrate = mongoose.model("Substrate", substrateSchema);

module.exports = Substrate;
