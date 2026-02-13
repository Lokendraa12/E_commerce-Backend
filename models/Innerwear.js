const mongoose = require("mongoose");

const InnerwearSchema = new mongoose.Schema(
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
      default: "innerwear",
    },

    sizes: {
      type: [String],
      default: ["S", "M", "L", "XL", "XXL"],
    },
    itemsPerPack: {
      type: Number,
      default: 1,
    },

    material: {
      type: String,
      default: "Cotton",
    },

    color: {
      type: String,
      default: "Assorted",
    },

    fit: {
      type: String,
      default: "Regular Fit",
    },

    waistband: {
      type: String,
      default: "Ultrasoft Elastic",
    },

    description: {
      type: String,
    },

    stock: {
      type: Number,
      default: 20,
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

module.exports = mongoose.model("Innerwear", InnerwearSchema);
