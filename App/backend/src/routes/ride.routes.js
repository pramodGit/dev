import express from "express";
import * as rideController from "../controllers/ride.controller.js";

const router = express.Router();

router.post("/publish", rideController.publish);
router.get("/search", rideController.search);

export default router;