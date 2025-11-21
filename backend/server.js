import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import courseRoutes from "./routes/courseRoutes.js";

dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";

app.use("/api/users", userRoutes);
app.use("/api/progress", progressRoutes);

const app = express();
app.use(cors());
app.use(express.json());

// Root test route
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

// Course API route
app.use("/api/courses", courseRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB Error:", err));
