import express from "express";
const router = express.Router();
import users from './user.comtroller.js'

router.get('/',users.addUsers)
router.post('/',users.getUsers)

export default router;