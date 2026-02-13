const mongoose = require("mongoose");

const JeansSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    images: {
      type: [String],
      required: true,
    },

    price: { type: Number, required: true },
    oldPrice: { type: Number },

    category: {
      type: String,
      default: "jeans",
    },
    sizes: {
      type: [String],
      default: ["30", "32", "34", "36", "38"],
    },

     stock: {
      type: Number,
      default: 10,
    },
     material: {
      type: String,
      default: "Cotton",
    },
    isBestSeller: {
      type: Boolean,
      default: false,
    },

    isNewArrival: {
      type: Boolean,
      default: false,
    },
     fit:{
      type: String,
      default: "Regular",
     }
     ,
      description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Jeans", JeansSchema);
