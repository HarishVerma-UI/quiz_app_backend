import express from "express";
import  questionsRoute  from "./questions/questions.routes.js";
import  usersRoute  from "./users/users.routes.js";
import cors from 'cors';

const app = express()
app.use(cors())
app.use(express.json())

app.use('/questions', questionsRoute );
app.use('/users', usersRoute );

export default app;