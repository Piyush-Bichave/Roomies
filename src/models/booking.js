const mongoose = require("mongoose");

// Define the Room Schema
const roomBooking = new mongoose.Schema({
  rid: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
  // You can add more fields as needed (e.g., location, amenities, etc.)
});

// Create a Room model using the schema
const Room = mongoose.model("Room", roomBooking);

module.exports = Room;
