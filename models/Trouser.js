const mongoose = require("mongoose");

const TrouserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    images: {
      type: [String],
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    oldPrice: {
      type: Number,
    },

    category: {
      type: String,
      default: "trousers",
    },

    sizes: {
      type: [String],
      default: ["30", "32", "34", "36", "38", "40"],
    },
    closureType: {
      type: String,
      default: "Lace-Up",
    },
    material: {
      type: String,
      default: "Cotton Blend",
    },

    color: {
      type: String,
    },

    fit: {
      type: String,
      default: "Slim Fit",
    },

    style:{
      type: String,
    },

    stock: {
      type: Number,
      default: 10,
    },

    description: {
      type: String,
    },

    isBestSeller: {
      type: Boolean,
      default: false,
    },

    isNewArrival: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Trouser", TrouserSchema);
