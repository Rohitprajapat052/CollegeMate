import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
//import {getFeedPosts, getUserPosts,likePost} from "../controllers/Post.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Read
router.get("/",verifyToken,getFeedPosts);
router.get("/:userID/posts",verifyToken,getUserPosts);


//update
router.patch("/:id/like", verifyToken,likePost);

export default router;

