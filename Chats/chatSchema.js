const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  cid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "customers",
  },
  drid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctors",
  },
  from: String,

  date: {
    type: Date,
  },
  msg: {
    type: String,
  },
  isactive: {
    type: Boolean,
    default: true,
  },
});
module.exports = mongoose.model("chats", Schema);
