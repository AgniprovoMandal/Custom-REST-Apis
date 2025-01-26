const express = require("express");
const bodyParser = require("body-parser");

const patientRoutes = require("./patients");
const pharmacyRoutes = require("./pharmacy");
const appointmentRoutes = require("./appointments");

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/api/patients", patientRoutes);
app.use("/api/pharmacy", pharmacyRoutes);
app.use("/api/appointments", appointmentRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
