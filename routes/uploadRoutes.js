import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

// Set up Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "ThrowAFit", // your Cloudinary folder
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

// Upload endpoint
router.post("/", upload.single("image"), (req, res) => {
  res.json({
    message: "✅ Image uploaded successfully!",
    url: req.file.path, // Cloudinary URL
  });
});

export default router;
