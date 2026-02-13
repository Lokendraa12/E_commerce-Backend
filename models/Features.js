const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    images: { type: [String], required: true },

    price: { type: Number, required: true },
    oldPrice: Number,

    category: {
      type: String,
      required: true,
      enum: ["tshirt", "shirt", "jeans", "trousers", "shoes", "innerwear"],
    },

    isBestSeller: {
      type: Boolean,
      default: false,
    },

    isNewArrival: {
      type: Boolean,
      default: false,
    },

    stock: { type: Number, default: 10 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Features", ProductSchema);
