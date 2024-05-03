import {Router} from "express"
import { createUser, loginUser } from "../controller/user"
import { validateCreateUser, validateSignIn } from "../validations/user"

const router = Router();

router.post("/", validateCreateUser, createUser);
router.post("/login", validateSignIn, loginUser);

export default router