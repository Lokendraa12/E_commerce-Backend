const express = require("express");
const router = express.Router();
const Tshirt = require("../models/Tshirt");

// 🔹 ADD T-SHIRT
router.post("/add", async (req, res) => {
  try {
    const tshirt = new Tshirt(req.body);
    await tshirt.save();

    res.status(201).json({
      success: true,
      message: "T-shirt added successfully",
      data: tshirt,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// 🔹 GET ALL T-SHIRTS
router.get("/", async (req, res) => {
  try {
    const tshirts = await Tshirt.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      total: tshirts.length,
      data: tshirts,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 🔹 GET SINGLE T-SHIRT
router.get("/:id", async (req, res) => {
  try {
    const tshirt = await Tshirt.findById(req.params.id);

    if (!tshirt) {
      return res.status(404).json({ message: "T-shirt not found" });
    }

    res.json({ success: true, data: tshirt });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 🔹 UPDATE T-SHIRT
router.put("/:id", async (req, res) => {
  try {
    const updated = await Tshirt.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      message: "T-shirt updated",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 🔹 DELETE (SOFT DELETE)
router.delete("/:id", async (req, res) => {
  try {
    await Tshirt.findByIdAndUpdate(req.params.id, { isActive: false });

    res.json({
      success: true,
      message: "T-shirt removed",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
