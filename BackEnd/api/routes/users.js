import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { deleteUser, getUser, getUsers, updateUser } from "../controller/usercontroller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router =express.Router();
/*
router.get("/checkauthentication", verifyToken, (req,res,next)=>{
   res.send("Hello User, you are Logged in");
})
router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
   res.send("Hello User, you are Logged in and you can delete your account");
})
router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
   res.send("Hello Admin, you are Logged in and you can delete all accounts");
})*/
//Update The User
router.put("/:id", verifyUser, updateUser);
//Delete The User
router.delete("/:id", verifyUser, deleteUser);
//Get The User
router.get("/:id", verifyUser, getUser);
//Get All the Users
router.get("/", verifyAdmin, getUsers);
export default router