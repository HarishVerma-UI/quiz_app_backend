import express from "express";

const addQuestion = (req,res ) => {
    res.json({
            successful: true,
            data:[{id:1,question:'abc',category:'abc'}]
        })
};

const getQuestions = (req,res ) => {
    res.json({
            successful: true,
            data:req.body
        })
};

export default{ addQuestion, getQuestions};