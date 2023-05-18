import express from "express";
const router = express.Router();
import questions from './questions.controller.js'

router.get('/',questions.getQuestions)

router.post('/',questions.addQuestion)

export default router;

