import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriends,
} from "../controllers/user.js";
import { verifytoken } from "../middleware/auth.js";

const router = express.Router();

// Read Routes

router.get("/:id", verifytoken, getUser);
router.get("/:id/friends", verifytoken, getUserFriends);

//Update Routes

router.patch("/:id/:friendId", verifytoken, addRemoveFriends); // or maybe friendID?
export default router;

