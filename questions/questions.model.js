import { Schema, model } from 'mongoose';

const questionsSchema = new Schema({
  category: String,
  questions: String,
});

const Questions = model('questions', questionsSchema);

export default Questions;