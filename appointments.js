const express = require("express");
const router = express.Router();

// Mock In-Memory Database
let appointments = [];

// Helper function to check overlapping
const isOverlapping = (start, end) => {
  return appointments.some(app => {
    return (
      (start >= app.start && start < app.end) || // Overlaps existing appointment
      (end > app.start && end <= app.end)
    );
  });
};

// Create an appointment
router.post("/create", (req, res) => {
  const { id, start, end } = req.body;
  if (!id || !start || !end) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const startTime = new Date(start);
  const endTime = new Date(end);

  if (isOverlapping(startTime, endTime)) {
    return res.status(409).json({ message: "Appointment overlaps with an existing one" });
  }

  appointments.push({ id, start: startTime, end: endTime });
  res.status(201).json({ message: "Appointment created successfully" });
});

// Retrieve all appointments
router.get("/", (req, res) => {
  res.status(200).json(appointments);
});

module.exports = router;
