import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  category: String, // e.g. tops, bottoms, shoes, etc.
  imageUrl: String,
}, { timestamps: true });

export default mongoose.model("Item", itemSchema);
