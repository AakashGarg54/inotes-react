const mongoose = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  Date: {
      type: Date,
      default: Date.now,
  }
});

module.exports = mongoose.model("user", UserSchema)