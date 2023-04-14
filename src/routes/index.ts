import { Router } from "express";
import UserController from "../controllers/user_controller";

const router = Router();

router.get("/", UserController.index);
router.get("/:id", UserController.show);
router.post("/", UserController.create);

export default router;
