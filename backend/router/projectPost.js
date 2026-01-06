import express from "express"
import projectPost from "../controllers/projectPost.js"

const router = express.Router()

router.post("/projectPost",projectPost)

export default router;
