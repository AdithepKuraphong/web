import express from "express";
import {getFeedPosts, getUserPosts, likepost} from "../controllers/posts.js";
import { verifytoken } from "../middleware/auth.js";

const router = express.Router();

//Read
router.get("/", verifytoken, getFeedPosts); //send feed to main(normal)(all)[can upgrade]
router.get("/:userId/posts", verifytoken, getUserPosts); // send feed to main(onlyuserที่เกี่ยวข้อง)
//Update
router.patch("/:id/like", verifytoken, likepost); // show like

export default router;