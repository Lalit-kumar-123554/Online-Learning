import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import courseRoutes from "./routes/courseRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";

dotenv.config();

// ⭐ Create app FIRST (before using app)
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/courses", courseRoutes);
app.use("/api/users", userRoutes);
app.use("/api/progress", progressRoutes);

// Root test route
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

// Port
const PORT = process.env.PORT || 5000;

// MongoDB Connection + Start Server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error("MongoDB Error:", err));
