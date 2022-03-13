const { response } = require('express');
const express = require('express');
const { json } = require('express/lib/response');
const userModel = require('../models/user');

async function findAll(req, res) {
    try {
        const users = await userModel.findAll({});
        if (users == false) res.send({ "message": "There are not users to show" });
        res.send(users);
    } catch (error) {
        res.send(error);
    }
}

async function findByUsername(req, res) {
    try {
        const user = await userModel.findByUsername(req.params.username);
        if (user == false) res.send({ "message": "User not found" });
        res.send(user);
    } catch (error) {
        res.send(error);
    }
}

async function findById(req, res) {
    try {
        const userById = await userModel.findById(req.params.userId);
        if (userById == false) res.send({ "message": "User not found" });
        res.send(userById)
    } catch (error) {
        res.send(error);
    }
}

async function addOne(req, res) {
    try {
        const userCreated = await userModel.addOne(req.body);
        res.send(userCreated);
    } catch (error) {
        res.send(error);
    }
}

async function updateOne(req, res) {
    try {
        const updatedUser = await userModel.updateOne(req.params.userId, req.body);
        res.send(updatedUser);
    } catch (error) {
        res.send(error);
    }
}

async function deleteOne(req, res){
    try {
        const deletedUser = await userModel.deleteOne(req.params.userId);
        res.send(deletedUser);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    findAll,
    findByUsername,
    findById,
    addOne,
    updateOne,
    deleteOne,
}