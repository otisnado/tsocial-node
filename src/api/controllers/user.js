const { response } = require('express');
const express = require('express');
const { json } = require('express/lib/response');
const userModel = require('../models/user');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await userModel.find({});
  
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:username', async (req, res) => {
  const user = await userModel.find().where('username').equals(req.params.username);

  try {
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  const user = new userModel(req.body);
  
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error)
  }

});

router.put('/:id', async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body);
    await user.save();
    res.send(user)
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);

    if(!user) res.status(404).send([{"message": "User not found"}]);
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
