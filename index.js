import express, { json } from 'express';
import questionsRoute from './questions/questions.routes.js';
import  usersRoute  from "./users/users.routes.js";
import { connect } from 'mongoose';
import 'dotenv/config';
import cors from 'cors';


const app = express();
app.use(cors())
app.use(json());

const URI = process.env.MONGO_URI;

// Connect to the MongoDB database
connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'wheel_app'
})
  .then((a) => {
    console.log('Connected to MongoDB');

    app.use('/questions', questionsRoute);
    app.use('/users', usersRoute);

    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
