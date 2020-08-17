const express=require("express");

const userController=require("../controller/controller.js");

const router = express.Router();

router.post("/signup",userController.Signup);
router.post("/signin",userController.Signin);
router.post("/update",userController.UpdateUser);
router.post("/addpost",userController.AddPosts);
router.post("/getPosts",userController.GetPosts);
router.post("/getUser",userController.GetUser);

exports.routes=router;