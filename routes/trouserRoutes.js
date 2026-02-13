const express = require("express");
const router = express.Router();
const Trouser = require("../models/Trouser");

/* CREATE TROUSER (ADMIN) */
router.post("/add", async (req, res) => {
  try {
    const trouser = await Trouser.create(req.body);
    res.status(201).json({ success: true, data: trouser });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

/* GET ALL TROUSERS */
router.get("/", async (req, res) => {
  try {
    const trousers = await Trouser.find().sort({ createdAt: -1 });
    res.json({ success: true, data: trousers });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/* GET TROUSER BY ID */
router.get("/:id", async (req, res) => {
  try {
    const trouser = await Trouser.findById(req.params.id);
    if (!trouser)
      return res.status(404).json({ success: false, message: "Product not found" });

    res.json({ success: true, data: trouser });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
/* UPDATE TROUSER (ADMIN) */
router.put("/:id", async (req, res) => {
    try {
        const updatedTrouser = await Trouser.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedTrouser) return res.status(404).json({ message: "Trouser not found" });
        res.json({ success: true, data: updatedTrouser });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }   
});
/* DELETE TROUSER (ADMIN) */
router.delete("/:id", async (req, res) => {
  try {
    const deletedTrouser = await Trouser.findByIdAndDelete(req.params.id);
    if (!deletedTrouser)
      return res.status(404).json({ message: "Trouser not found" });    
    res.json({ success: true, message: "Trouser deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});



module.exports = router;
