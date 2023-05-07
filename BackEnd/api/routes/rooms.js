import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controller/roomcontroller.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router =express.Router();
//Save The Room
router.post("/:hotelid", verifyAdmin, createRoom);
//Update The Room
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);
//Delete The Room
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//Get The Room
router.get("/:id", getRoom);
//Get All the Rooms
router.get("/", getRooms);
export default router