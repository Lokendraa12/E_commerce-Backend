const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        name: String,
        price: Number,
        qty: Number,
        image: String,
      },
    ],

    address: {
      name: String,
      phone: String,
      street: String,
      city: String,
      state: String,
      pincode: String,
    },

    paymentMethod: String,
    deliveryCharge: Number,
    totalAmount: Number,
    paymentStatus: String,

    status: {
      type: String,
      default: "Processing",
    },
    estimatedDelivery: {
  type: Date,
},
  },
  { timestamps: true }
  

);


module.exports = mongoose.model("Order", orderSchema);
