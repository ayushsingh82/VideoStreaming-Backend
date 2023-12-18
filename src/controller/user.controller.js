import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from "../utils/ApiError.js"

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
})

export {registerUser}