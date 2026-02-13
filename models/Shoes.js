const mongoose = require("mongoose");

const ShoesSchema = new mongoose.Schema(
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
      default: "shoes",
    },

    material: {
      type: String,
      default: "Synthetic",
    },

    color: {
      type: String,
      default: "Black",
    },

    soleType: {
      type: String,
      default: "Rubber",
    },

    closureType: {
      type: String,
      default: "Lace-Up",
    },


    sizes: {
      type: [String],
      default: ["6", "7", "8", "9", "10"],
    },

    stock: {
      type: Number,
      default: 10,
    },

     description: {
      type: String,
    },
     style:{
       type: String,
       default: "Casual",
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

module.exports = mongoose.model("Shoes", ShoesSchema);
