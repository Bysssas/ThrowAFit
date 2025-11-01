import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("🖼️ Upload route placeholder — working!");
});

export default router;
