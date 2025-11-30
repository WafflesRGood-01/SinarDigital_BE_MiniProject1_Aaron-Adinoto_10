import express from "express";
import {
  getAllConfessions,
  addConfession,
  updateConfession,
  deleteConfession
} from "../controllers/apiController.js";

const router = express.Router();

router.get("/", getAllConfessions);
router.post("/", addConfession);
router.put("/:id", updateConfession);
router.delete("/:id", deleteConfession);

export default router;