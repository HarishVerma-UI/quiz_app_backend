import express from "express";
import User from './users.model.js';

const addUsers = (req, res) => {
  try {
    const { name } = req.body;
    console.log(req.body)
    const newUser = new User({name,email:'player@test.com'});
    newUser.save();
    res.json({
      successful: true,
      data: [newUser]
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add user' });
  }
};

const getUsers =async (req,res ) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

export default{ addUsers, getUsers};