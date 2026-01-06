import sendMail from "../controllers/mail.js";
import express from "express";

const router = express.Router();

router.post("/mail", sendMail);

export default router;
