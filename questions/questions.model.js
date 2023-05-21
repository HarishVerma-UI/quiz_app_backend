import { Schema, model } from 'mongoose';

const questionsSchema = new Schema({
  category: String,
  question: String,
});

const Questions = model('questions', questionsSchema);

export default Questions;