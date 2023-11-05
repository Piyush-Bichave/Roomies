const mongoose = require("mongoose");

const userSelectionSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  phoneNumber: {
    type: String, 
  },
  roomname: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  }
  });
  
module.exports = mongoose.model('UserSelection', userSelectionSchema);
  