const express = require("express");
const router = express.Router();
const Feature = require("../models/Features");
const Tshirt = require("../models/Tshirt");
const Shirt = require("../models/Shirt");
const Jeans = require("../models/Jeans");
const Trouser = require("../models/Trouser");   
const Innerwear = require("../models/Innerwear");
const Shoes = require("../models/Shoes");

// GET products by type
// /api/products?type=best or type=new
router.get("/", async (req, res) => {
  try {
    const type = req.query.type;
    let filter = {};

    if (type === "best") {
      filter.isBestSeller = true;
    } else if (type === "new") {
      filter.isNewArrival = true;
    }

    // Alag-alag collections me query
    const tshirts = await Tshirt.find(filter);
    const shirts = await Shirt.find(filter);
    const jeans = await Jeans.find(filter);
    const trousers = await Trouser.find(filter);
    const innerwear = await Innerwear.find(filter);
    const shoes = await Shoes.find(filter);

    // Combine all arrays
    const products = [...tshirts, ...shirts, ...jeans, ...trousers, ...innerwear, ...shoes];

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err });
  }
});

module.exports = router;
