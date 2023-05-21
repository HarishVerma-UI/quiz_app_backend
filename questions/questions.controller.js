import express from "express";
import Questions from './questions.model.js';

const addQuestion = (req,res ) => {
   try {
    const { question, category } = req.body;
    console.log(req.body)
    const newQuestion = new Questions({question,category});
    newQuestion.save();
    res.json({
      successful: true,
      data: [newQuestion]
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add questions' });
  }
};

const getQuestions =async (req,res ) => {
    try {
    const questions = await Questions.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
};

export default{ addQuestion, getQuestions};