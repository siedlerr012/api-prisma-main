import { Router } from "express";
import { prisma } from "../../config/prisma.js";

const router = Router();

router.get("/ping", (req, res) => {
    res.json({pong: true});
});


export default router;
