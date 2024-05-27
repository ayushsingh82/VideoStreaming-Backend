import { Router } from "express";
import { getVideo, loginUser, logoutUser, refreshAccessToken, registerUser } from "../controller/user.controller.js";
import {upload} from '../middlewares/multer.middleware.js'


const router=Router()

//video 

router.route('/getUploadedVideos').post(getVideo);

export default router

//p.ip.fi