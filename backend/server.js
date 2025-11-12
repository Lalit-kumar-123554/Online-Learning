import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"; // ✅ import function
import courseRoutes from "./routes/courseRoutes.js";

dotenv.config(); // ✅ Load .env file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// Routes
app.use("/api/courses", courseRoutes);

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
