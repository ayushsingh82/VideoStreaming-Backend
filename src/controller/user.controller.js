import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from "../utils/ApiError.js"
import { User } from '../models/user.model.js';


const registerUser=asyncHandler(async(req,res)=>{
    // res.status(200).json({
    //   messgae:"ok"
    // })

    const {fullName,email,username,password}= req.body
    console.log("email",email)

    if(fullName===""){
      throw new ApiError(400,"fullname is required")
    }

    if(
   [fullName,email,username,password].some((field)=>
     field?.trim()==="")
    ){
      throw new ApiError(400,"All fields are required")
    }

    const existedUser=User.findOne({
      $or:[{username},{email}]
    })

    if(existedUser){
      throw new ApiError(409,"User already exist")
    }

    const avatarLocalPath=req.files?.avatar[0]?.path;
    const coverImageLocalPath=req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
      throw new ApiError(400,"Avatar file is required")
    }
})

export {registerUser}