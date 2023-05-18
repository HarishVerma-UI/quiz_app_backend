import express from "express";
import User from './users.model.js';

const addUsers = (req,res ) => {
    res.json({
            successful: true,
            data:[{id:1,question:'abc',category:'abc'}]
        })
};

const getUsers =async (req,res ) => {
    console.log(User);
  try {
    const users = await User.find();
    console.log(users)
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

export default{ addUsers, getUsers};