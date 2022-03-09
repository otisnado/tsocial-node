const { response } = require('express');
const express = require('express');
const { json } = require('express/lib/response');
const threadsModel = require('../models/threads');

const router = express.Router();

router.get('/', async (req, res) => {
  const threads = await threadsModel.find({});
  
  try {
    res.send(threads);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:threadId', async (req, res) => {
  const thread = await threadsModel.find().where('id').equals(req.params.threadId);

  try {
    res.send(thread);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/me', async (req, res) => {
  const thread = await threadsModel.find().where('userId').equals(req.body.userId);

  try {
    res.send(thread);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/user', async (req, res) => {
  const thread = await threadsModel.find().where('userId').equals(req.body.userId);

  try {
    res.send(thread);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  const thread = new threadsModel(req.body);
  
  try {
    await thread.save();
    res.send(thread);
  } catch (error) {
    res.status(500).send(error)
  }

});

router.put('/:threadId', async (req, res) => {
  try {
    const thread = await threadsModel.findByIdAndUpdate(req.params.threadId, req.body).where("userId").equals(req.body.userId);
    await thread.save();
    res.send(thread)
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:threadId', async (req, res) => {
  try {
    const thread = await threadsModel.findByIdAndDelete(req.params.threadId).where("userId").equals(req.body.userId);

    if(!thread) res.status(404).send([{"message": "Thread not found"}]);
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
