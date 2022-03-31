const express = require("express");
const mongoDB = require("mongoose");
const modelUser = require("../model/model_user");
const route = express.Router();

route.get('/users/edit/:id', async (req,res) => {
    try {
        console.info(req.params.id)
       const outputUsers = await modelUser.findById(req.params.id);
       debugger;
       console.info("User found.")
       res.status(200).json(outputUsers)
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

route.get('/users', async (req,res) => {
    try {
       const outputUsers = await modelUser.find();
       console.info("Users found.")
       res.status(200).json(outputUsers)
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

route.post('/users/addUser', async (req,res) => {
    const {firstName, lastName, gender, dateOfBirth, email, mobile, address} = req.body;
    let currentUser = {};
    currentUser['firstName'] = firstName;
    currentUser['lastName'] = lastName;
    currentUser['gender'] = gender;
    currentUser['dateOfBirth'] = dateOfBirth;
    currentUser['email'] = email;
    currentUser['mobile'] = mobile;
    currentUser['address'] = address;
    let user = new modelUser(currentUser);
    try {
        const newUser = await user.save();
        console.info("User added.")
        res.status(201).json(newUser);
    }catch(err) {
        res.status(500).json({message: err.message});
    }
});

route.patch("/users/edit/:id", async (req, res) => {
    const id = req.params.id;

    const updateUser = await modelUser.findByIdAndUpdate(id, req.body)
    console.info("User updated.")
    res.status(200).json(updateUser);
});

route.delete('/users/:id', async (req,res) => {
    try {
       const outputUsers = await modelUser.findByIdAndDelete(req.params.id)
       console.info("User Deleted-"+req.params.id)
       res.status(200).json({message: "Data Deleted"})
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

module.exports = route;