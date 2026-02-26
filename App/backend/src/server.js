import dotenv from "dotenv";
dotenv.config();

console.log("ENV:", process.env.DB_USER);

import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import rideRoutes from "./routes/ride.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Ride App Backend Running 🚀"
  });
});

app.use("/api/users", userRoutes);
app.use("/api/rides", rideRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});