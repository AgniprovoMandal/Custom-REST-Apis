const express = require("express");
const router = express.Router();

// Mock Data
const patients = [
  { id: 1, name: "Agniprovo Mandal", age: 21, gender: "Male" },
  { id: 2, name: "Jane Smith", age: 25, gender: "Female" },
  { id: 3, name: "Sam Wilson", age: 40, gender: "Male" },
];

// Endpoint to fetch patients
router.get("/", (req, res) => {
  res.status(200).json(patients);
});

module.exports = router;
