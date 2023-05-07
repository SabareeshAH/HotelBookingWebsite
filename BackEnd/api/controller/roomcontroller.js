import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
//import { createError } from "../utils/error.js";

export const createRoom = async (req,res,next) => {
    const hotelId=req.params.hotelid;
    const newRoom=new Room(req.body);
    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $push: {room: newRoom._id},
            });
        }catch(err){
            next(err);
        }
        res.status(200).json(savedRoom);
    }catch(err){
        next(err);
    }
};

//Update the Room
export const updateRoom = async (req,res,next)=>{
    try{
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedRoom);
     }catch(err){
        next(err);
     }
}
export const updateRoomAvailability = async (req, res, next) => {
    try {
      await Room.updateOne(
        { "roomNumbers._id": req.params.id },
        {
          $push: {
            "roomNumbers.$.unavailableDates": req.body.dates
          },
        }
      );
      res.status(200).json("Room status has been updated.");
    } catch (err) {
      next(err);
    }
  };
//Delete the Room
export const deleteRoom = async (req,res,next)=>{
    const hotelId = req.params.hotelId;
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $pull: {rooms: req.params.id},
            });
        }catch(err){
            next(err);
        }
        res.status(200).json("Room Deleted Successfully!");
     }catch(err){
        next(err);
     }
}
//Get the Room
export const getRoom = async (req,res,next)=>{
    try{
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
     }catch(err){
        next(err);
     }
}
//Get All the Rooms
export const getRooms = async (req,res,next)=>{
    //const failed = true;
   //if(failed) return next(createError(404,"You are Not Authenticated"));
   try{
    const rooms = await Rpom.find();
    res.status(200).json(rooms);
 }catch(err){
    next(err);
 }
}