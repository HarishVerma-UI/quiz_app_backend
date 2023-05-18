import express from "express";
import  questionsRoute  from "./questions/questions.routes.js";
import  usersRoute  from "./users/users.routes.js";
import cors from 'cors';
const mongoose = require('mongoose');
import 'dotenv/config';

const app = express();
app.use(cors())
app.use(express.json())
const URI = process.env.MONGO_URI;
// Connect to the MongoDB database
mongoose.connect('URI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'wheel_app' 
})
  .then((a) => {
    console.log(a.Model);

   app.use('/questions', questionsRoute );
   app.use('/users', usersRoute );

   app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

module.exports = app; 