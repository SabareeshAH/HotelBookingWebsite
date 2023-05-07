import { Promise } from "mongoose";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
//Save the Hotel
export const createHotel = async (req,res,next)=>{
    const newHotel=new Hotel(req.body)
    try{
       const savedHotel = await newHotel.save()
       res.status(200).json(savedHotel);
    }catch(err){
       next(err);
    }
}
//Update the Hotel
export const updateHotel = async (req,res,next)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedHotel);
     }catch(err){
        next(err);
     }
}
//Delete the Hotel
export const deleteHotel = async (req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Deleted Successfully!");
     }catch(err){
        next(err);
     }
}
//Get the Hotel
export const getHotel = async (req,res,next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
     }catch(err){
        next(err);
     }
}
//Get All the Hotels
export const getHotels = async (req,res,next)=>{
    //const failed = true;
   //if(failed) return next(createError(404,"You are Not Authenticated"));
   const {min,max,...others}=req.query
   try{
    const Hotels = await Hotel.find({...others, cheapestPrice:{$gt:min | 1, $lt:max || 999},
   }).limit(req.query.limit);
    res.status(200).json(Hotels);
 }catch(err){
    next(err);
 }
}

export const countByCity = async (req, res, next) => {
   const cities = req.query.cities.split(",");
   try {
     const list = await Promise.all(
       cities.map((city) => {
         return Hotel.countDocuments({ city: city });
       })
     );
     res.status(200).json(list);
   } catch (err) {
     next(err);
   }
 };

export const countByType = async (req, res, next) => {
   try {
     const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
     const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
     const resortCount = await Hotel.countDocuments({ type: "resort" });
     const villaCount = await Hotel.countDocuments({ type: "villa" });
     const cabinCount = await Hotel.countDocuments({ type: "cabin" });
 
     res.status(200).json([
       { type: "hotel", count: hotelCount },
       { type: "apartments", count: apartmentCount },
       { type: "resorts", count: resortCount },
       { type: "villas", count: villaCount },
       { type: "cabins", count: cabinCount },
     ]);
   } catch (err) {
     next(err);
   }
 };

 export const getHotelRooms = async(req,res,next)=>{
   try{
      const hotel = await Hotel.findById(req.params.id)
      // const list = await Promise(
      //    hotel.room.map((r)=>{
      //       console.log(r)
      //       return Room.findById(r)
      //    })
      // );
      var ans=new Array;
      for(var i=0;i<hotel.room.length;++i) {
         ans.push(await Room.findById(hotel.room[i]));
      }
      console.log(ans)
      res.status(200).json(ans)
   }catch(err){
      next(err);
   }
 }