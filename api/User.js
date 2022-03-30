const express = require("express");
const mongoDB = require("mongoose");
const modelUser = require("../model/model_user");
const route = express.Router();

route.get('/', async (req,res) => {
    try {
       const outputUsers = await modelUser.find();
       console.info("Users found.")
       res.status(200).json(outputUsers)
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

route.post('/addUser', async (req,res) => {
    const {firstName, lastName, dateOfBirth, email, mobile} = req.body;
    let currentUser = {};
    currentUser['firstName'] = firstName;
    currentUser['lastName'] = lastName;
    currentUser['dateOfBirth'] = dateOfBirth;
    currentUser['email'] = email;
    currentUser['mobile'] = mobile;
    let user = new modelUser(currentUser);

    try {
        const newUser = await user.save();
        console.info("User added.")
        res.status(201).json(newUser);
    }catch(err) {
        res.status(500).json({message: err.message});
    }
});

module.exports = route;