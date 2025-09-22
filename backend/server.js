import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config(); // read from .env
const app = express();

connectDB(); // connect to MongoDB
app.use(cors());
app.use(express.json()); // allow JSON in requests

// All routes starting with /api/auth go here
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
