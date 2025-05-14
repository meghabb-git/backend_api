const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  name:String,
  description:String, 
  createdOn: {
    type: Date,
    default: Date.now,
  },
  updatedOn: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("Items", itemsSchema);
