const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false, // abhi login nahi to false
    },
    name: String,
    phone: String,
    street: String,
    city: String,
    state: String,
    pincode: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", addressSchema);
