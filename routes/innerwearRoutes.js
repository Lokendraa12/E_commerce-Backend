const express = require("express");
const router = express.Router();
const Innerwear = require("../models/Innerwear");

/* ================================
   CREATE INNERWEAR (ADMIN)
================================ */
router.post("/add", async (req, res) => {
  try {
    const product = await Innerwear.create(req.body);
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

/* ================================
   GET ALL INNERWEAR
================================ */
router.get("/", async (req, res) => {
  try {
    const products = await Innerwear.find().sort({ createdAt: -1 });
    res.json({ success: true, data: products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ================================
   GET INNERWEAR BY ID
================================ */
router.get("/:id", async (req, res) => {
  try {
    const product = await Innerwear.findById(req.params.id);
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });

    res.json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ================================
   UPDATE INNERWEAR (ADMIN)
================================ */
router.put("/:id", async (req, res) => {
  try {
    const updated = await Innerwear.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated)
      return res
        .status(404)
        .json({ success: false, message: "Innerwear not found" });

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ================================
   DELETE INNERWEAR (ADMIN)
================================ */
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Innerwear.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res
        .status(404)
        .json({ success: false, message: "Innerwear not found" });

    res.json({
      success: true,
      message: "Innerwear deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
