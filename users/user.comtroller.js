import express from "express";


const addUsers = (req,res ) => {
    res.json({
            successful: true,
            data:[{id:1,question:'abc',category:'abc'}]
        })
};

const getUsers = (req,res ) => {
    res.json({
            successful: true,
            data:req.body
        })
};

export default{ addUsers, getUsers};