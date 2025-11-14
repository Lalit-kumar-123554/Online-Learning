import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, default: "Shams Tabrez" },
  lessons: { type: Number, default: 10 },
  progress: { type: String, default: "0/10 lessons" },
  status: {
    type: String,
    enum: ["In Progress", "Completed"],
    default: "In Progress",
  },
  topics: [
    {
      title: { type: String, required: true },
      content: { type: String, default: "Content will be added soon." }
    }
  ],
  dueDate: { type: Date, default: Date.now }
});

export default mongoose.model("Course", courseSchema);
