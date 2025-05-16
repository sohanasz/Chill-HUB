import express from "express";
import { Search } from "../controllers/search.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/search", Search);

export default router;
