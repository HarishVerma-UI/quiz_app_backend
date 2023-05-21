import express from "express";
const router = express.Router();
import users from './user.comtroller.js'

router.get('/', users.getUsers);
router.post('/', users.addUsers);

export default router;



