import express from "express";
import Progress from "../models/Progress.js";

const router = express.Router();

// Get user progress
router.get("/", async (req, res) => {
  try {
    const progress = await Progress.find();
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update/Add progress
router.post("/", async (req, res) => {
  try {
    const newProgress = await Progress.create(req.body);
    res.status(201).json(newProgress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
