import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { countByType, countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel, getHotelRooms } from "../controller/hotelcontroller.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router =express.Router();
//Save The Hotel
router.post("/", verifyAdmin, createHotel);
//Update The Hotel
router.put("/:id", verifyAdmin, updateHotel);
//Delete The Hotel
router.delete("/:id", verifyAdmin, deleteHotel);
//Get The Hotel
router.get("/find/:id", getHotel);
//Get All the Hotels
router.get("/", getHotels);

/*router.get("/",getHotels);*/
router.get("/countByCity",countByCity);
router.get("/countByType",countByType);
router.get("/room/:id", getHotelRooms);
export default router