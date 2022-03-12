const { response } = require('express');
const express = require('express');
const res = require('express/lib/response');
const { json } = require('express/lib/response');
const threadsModel = require('../models/threads');

async function getAll(req, res){
    const threads = await threadsModel.getAll({});
    if(threads == false) res.send({"message": "There are not threads to show"});
    res.send(threads);
}

async function getThreadById(req, res){
    const thread = await threadsModel.getThreadById(req.params.threadId);

    if(thread == false) res.send({"message": "Thread not found"});
    res.send(thread);
}

async function getMyThreads(req, res){
    let userId = req.params.userId;
    const myThreads = await threadsModel.getMyThreads(userId);

    if(myThreads == false) res.send({"message": "You do not have any thread yet"});
    res.send(myThreads);
}

async function getUserThreads(req, res){
    let userId = req.params.userId;
    const userThreads = await threadsModel.getUserThreads(userId);

    if(userThreads == false) res.send({"message": "You do not have any thread yet"});
    res.send(userThreads);
}

async function addThread(req, res){
    const thread = await threadsModel.addThread(req.body);
    if(!thread) res.send({"message": "Thread could not be added"});
    res.send(thread);
}

async function updateThread(req, res){
    try {
        const updatedThread = await threadsModel.updateThread(req.params.threadId, req.body);
        res.send(updatedThread);
    } catch (error) {
        res.send(error);
    }
}

async function deleteThread(req, res){
    try {
        const deletedThread = await threadsModel.deleteThread(req.params.threadId, req.body.userId);
        if(deletedThread == false) res.status(404).send([{"message": "Thread not found"}]);
        res.send(deletedThread);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    getAll,
    getThreadById,
    getMyThreads,
    getUserThreads,
    addThread,
    updateThread,
    deleteThread
}