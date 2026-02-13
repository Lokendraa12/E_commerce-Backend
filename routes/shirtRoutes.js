const express = require("express");
const router = express.Router();
const Shirt = require("../models/Shirt");

// ➕ ADD SHIRT
router.post("/add", async (req, res) => {
  try {
    const shirt = new Shirt(req.body);
    await shirt.save();
    res.status(201).json({ success: true, data: shirt });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 📦 GET ALL SHIRTS
router.get("/", async (req, res) => {
  try {
    const shirts = await Shirt.find().sort({ createdAt: -1 });
    res.json({ success: true, data: shirts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 🔍 GET SINGLE SHIRT
router.get("/:id", async (req, res) => {
  try {
    const shirt = await Shirt.findById(req.params.id);
    if (!shirt) return res.status(404).json({ message: "Shirt not found" });
    res.json({ success: true, data: shirt });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
// ✏️ UPDATE SHIRT
router.put("/:id", async (req, res) => {
  try {
    const updatedShirt = await Shirt.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    if (!updatedShirt) return res.status(404).json({ message: "Shirt not found" });
    res.json({ success: true, data: updatedShirt });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  } 
});

// ❌ DELETE SHIRT
router.delete("/:id", async (req, res) => {
  try {
    const deletedShirt = await Shirt.findByIdAndDelete(req.params.id);
    if (!deletedShirt) return res.status(404).json({ message: "Shirt not found" });
    res.json({ success: true, message: "Shirt deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}); 

module.exports = router;
