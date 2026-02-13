const mongoose = require("mongoose");

const TshirtSchema = new mongoose.Schema(
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
      default: "tshirt",
    },

    sizes: {
      type: [String],
      default: ["S", "M", "L", "XL", "XXL"],
    },

    material: {
      type: String,
      default: "Cotton",
    },

    color: {
      type: String,
    },

    fit: {
      type: String, // Regular / Slim
      default: "Regular Fit",
    },

    sleeveType: {
      type: String, // Half Sleeve / Full Sleeve
    },

    neckType: {
      type: String, // Round Neck / Polo / V-neck
    },

    style: {
      type: String, // Casual / Sports
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

module.exports = mongoose.model("Tshirt", TshirtSchema);
