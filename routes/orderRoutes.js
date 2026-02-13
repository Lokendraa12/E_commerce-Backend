const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// ✅ Create Order
router.post("/", async (req, res) => {
  try {
    const { userId, items, totalAmount, paymentMethod, address } = req.body;

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 4);

    const newOrder = new Order({
      userId,
      items,
      totalAmount,
      paymentMethod,
      address,
      status: "Processing",
      estimatedDelivery: deliveryDate,
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order Placed Successfully ✅",
      order: newOrder,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error placing order ❌" });
  }
});

// ✅ Get Orders by User
router.get("/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });

    const today = new Date();

   for (let order of orders) {
  const orderDate = new Date(order.createdAt);
  const diffDays = Math.floor((today - orderDate) / (1000 * 60 * 60 * 24));

  // Agar order already Cancelled ya Delivered hai, skip karo
  if (order.status === "Cancelled" || order.status === "Delivered") continue;

  if (diffDays >= 3) order.status = "Delivered";
  else if (diffDays ===1) order.status = "Out for Delivery";
  else if (diffDays === 1) order.status = "Shipped";
  else order.status = "Processing";

  await order.save();
}


    res.json(orders);

  } catch (error) {
    res.status(500).json({ message: "Error fetching orders ❌" });
  }
});

// ✅ Update Order Status
router.put("/:id", async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json({ message: "Order updated ✅", order: updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating status ❌" });
  }
});

// ✅ Cancel Order
router.put("/cancel/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({ message: "Order not found ❌" });
    if (order.status === "Delivered") return res.status(400).json({ message: "Delivered order cannot be cancelled ❌" });
    if (order.status === "Cancelled") return res.status(400).json({ message: "Order already cancelled ❌" });

    order.status = "Cancelled";
    await order.save();

    res.json({ message: "Order cancelled successfully ✅", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error ❌" });
  }
});

// ✅ Delete Order
// ✅ Delete Order
router.delete("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({ message: "Order not found ❌" });

    // Delivered order cannot be deleted
    
    await Order.findByIdAndDelete(req.params.id);

    res.json({ message: "Order deleted successfully ✅", orderId: req.params.id });
  } catch (error) {
    res.status(500).json({ message: "Error deleting order ❌" });
  }
});


module.exports = router;
