const express = require("express");
const router = express.Router();
const Shoes = require("../models/Shoes");

/* ================================
   CREATE SHOES (ADMIN)
================================ */
router.post("/add", async (req, res) => {
  try {
    const shoes = await Shoes.create(req.body);
    res.status(201).json({ success: true, data: shoes });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

/* ================================
   GET ALL SHOES
================================ */
router.get("/", async (req, res) => {
  try {
    const shoes = await Shoes.find().sort({ createdAt: -1 });
    res.json({ success: true, data: shoes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ================================
   GET SHOES BY ID
================================ */
router.get("/:id", async (req, res) => {
  try {
    const shoes = await Shoes.findById(req.params.id);
    if (!shoes)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });

    res.json({ success: true, data: shoes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ================================
   UPDATE SHOES (ADMIN)
================================ */
router.put("/:id", async (req, res) => {
  try {
    const updatedShoes = await Shoes.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedShoes)
      return res
        .status(404)
        .json({ success: false, message: "Shoes not found" });

    res.json({ success: true, data: updatedShoes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ================================
   DELETE SHOES (ADMIN)
================================ */
router.delete("/:id", async (req, res) => {
  try {
    const deletedShoes = await Shoes.findByIdAndDelete(req.params.id);
    if (!deletedShoes)
      return res
        .status(404)
        .json({ success: false, message: "Shoes not found" });

    res.json({
      success: true,
      message: "Shoes deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
