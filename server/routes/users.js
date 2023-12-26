import express from "express";

import  {
    getUser,
    getUserFriend,
    addRemoveFriends,
} from "../controllers/users.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//Read
router.get("/:id", verifyToken , getUser );

router.get("/:id/friends", verifyToken , getUserFriend );

//UPDATE

router.patch("/:id/:friendId", verifyToken, addRemoveFriends);

export default router;


