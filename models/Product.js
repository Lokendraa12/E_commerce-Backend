const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },

    images: [{ type: String, required: true }], // multiple images

    price: { type: Number, required: true },

    discountPrice: { type: Number, default: null },

    description: { type: String, required: true },

    category: { type: String, required: true },

    brand: { type: String, default: "Generic" },

    rating: { type: Number, default: 0 },

    numReviews: { type: Number, default: 0 },

    countInStock: { type: Number, required: true, default: 0 },

    tags: [{ type: String }], // for search & filter

    isFeatured: { type: Boolean, default: false }, // homepage me feature karne ke liye
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
