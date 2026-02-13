const router = require('express').Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  try {
    const { user, items, total, address } = req.body;
    const order = await Order.create({ user, items, total, address });
    res.json(order);
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.get('/my/:userId', async (req, res) => {
  const orders = await Order.find({ user: req.params.userId }).populate('items.product');
  res.json(orders);
});

module.exports = router;
