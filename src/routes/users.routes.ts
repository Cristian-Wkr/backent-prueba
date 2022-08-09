import { Router } from "express";
import { createUser, getUsers, updateUser, deleteUser, getUser} from "../controler/user.controller";

const router = Router();

router.get("/get_users", getUsers);
router.post("/create_user", createUser);
router.put("/update_user/:id", updateUser)
router.delete("/delete_user/:id", deleteUser)
router.get("/get_user/:id", getUser)

export default router;
