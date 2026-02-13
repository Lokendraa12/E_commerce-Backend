const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

// In-memory
let addresses = [];

// Add address
router.post("/", (req, res) => {
  const newAddress = {
    id: uuidv4(),
    ...req.body,
  };
  addresses.push(newAddress);
  res.status(201).json(newAddress);
});

// Get addresses
router.get("/", (req, res) => {
  res.json(addresses);
});

module.exports = router;   // ✅ MUST
