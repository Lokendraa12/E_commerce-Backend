const express = require("express");
const router = express.Router();
const Jeans = require("../models/Jeans");

/* ================================
   CREATE JEANS (ADMIN)
================================ */
router.post("/add", async (req, res) => {
  try {
    const jeans = await Jeans.create(req.body);
    res.status(201).json({ success: true, data: jeans });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

/* ================================
   GET ALL JEANS
================================ */
router.get("/", async (req, res) => {
  try {
    const jeans = await Jeans.find().sort({ createdAt: -1 });
    res.json({ success: true, data: jeans });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ================================
   GET JEANS BY ID
================================ */
router.get("/:id", async (req, res) => {
  try {
    const jeans = await Jeans.findById(req.params.id);
    if (!jeans)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });

    res.json({ success: true, data: jeans });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ================================
   UPDATE JEANS (ADMIN)
================================ */
router.put("/:id", async (req, res) => {
  try {
    const updatedJeans = await Jeans.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedJeans)
      return res
        .status(404)
        .json({ success: false, message: "Jeans not found" });

    res.json({ success: true, data: updatedJeans });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/* ================================
   DELETE JEANS (ADMIN)
================================ */
router.delete("/:id", async (req, res) => {
  try {
    const deletedJeans = await Jeans.findByIdAndDelete(req.params.id);
    if (!deletedJeans)
      return res
        .status(404)
        .json({ success: false, message: "Jeans not found" });

    res.json({
      success: true,
      message: "Jeans deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
