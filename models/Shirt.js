const mongoose = require("mongoose");

const ShirtSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    images: [{ type: String, required: true }],
    price: { type: Number, required: true },
    oldPrice: { type: Number },
    category: { type: String, default: "shirt" },
    sizes: {
      type: [String],
      default: [ "M", "L", "XL", "XXL"],
    },
    material: { type: String, default: "Cotton" },
    description: { type: String },
    sleeveType: {
      type: String, // Half Sleeve / Full Sleeve
    },
    color: {
      type: String,
    },
    fit: {
      type: String, // Regular / Slim
      default: "Regular Fit",
    },

    neckType: {
      type: String, // Round Neck / Polo / V-neck
    },

    style: {
      type: String, // Casual / Sports
    },
    
    stock: { type: Number, default: 10 },
    isActive: { type: Boolean, default: true },
    
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

module.exports = mongoose.model("Shirt", ShirtSchema);
