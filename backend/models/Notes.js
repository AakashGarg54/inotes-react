const mongoose = require("mongoose");

const notesSchema = new Schema({
  title: {
    type: "string",
    required: true,
  },
  desc: {
    type: "string",
    required: true,
  },

  Date: {
    type: string,
    default: "General",
  },
});

module.exports = mongoose.model("notes", notesSchema);
