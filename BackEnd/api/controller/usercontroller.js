import User from "../models/User.js";

//Update the User
export const updateUser = async (req,res,next)=>{
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedUser);
     }catch(err){
        next(err);
     }
}
//Delete the User
export const deleteUser = async (req,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Deleted Successfully!");
     }catch(err){
        next(err);
     }
}
//Get the User
export const getUser = async (req,res,next)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
     }catch(err){
        next(err);
     }
}
//Get All the Users
export const getUsers = async (req,res,next)=>{
    //const failed = true;
   //if(failed) return next(createError(404,"You are Not Authenticated"));
   try{
    const users = await User.find();
    res.status(200).json(users);
 }catch(err){
    next(err);
 }
}