import express from "express";
import { registerUser, loginUser, getUserData } from "../controllers/users.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/me", verifyToken, getUserData);

export default router;
