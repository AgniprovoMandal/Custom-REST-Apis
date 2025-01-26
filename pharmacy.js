const express = require("express");
const router = express.Router();

// Mock In-Memory Database
let pharmacyOrders = [];

// Add an order
router.post("/add", (req, res) => {
  const { id, medicine, quantity } = req.body;
  if (!id || !medicine || !quantity) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  pharmacyOrders.push({ id, medicine, quantity });
  res.status(201).json({ message: "Order added successfully" });
});

// View all orders
router.get("/", (req, res) => {
  res.status(200).json(pharmacyOrders);
});

// Delete an order
router.delete("/delete/:id", (req, res) => {
  const orderId = req.params.id;
  pharmacyOrders = pharmacyOrders.filter(order => order.id !== orderId);
  res.status(200).json({ message: "Order deleted successfully" });
});

module.exports = router;
