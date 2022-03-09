const { response } = require('express');
const express = require('express');
const { json } = require('express/lib/response');
const followsModel = require('../models/follow');

const router = express.Router();


router.get('/followers', async (req, res) => {
  const followers = await followsModel.find().where('following').equals(req.body.userId);

  try {
    res.send(followers);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/following', async (req, res) => {
  const following = await followsModel.find().where('userId').equals(req.body.userId);

  try {
    res.send(following);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  const followerAdded = new followsModel(req.body);
  
  try {
    await followerAdded.save();
    res.send(followerAdded);
  } catch (error) {
    res.status(500).send(error)
  }

});

router.delete('/', async (req, res) => {
  try {
    const unfollow = await followsModel.findOneAndDelete({"userId": req.body.userId}).where("following").equals(req.body.unfollow);

    if(!unfollow) res.status(404).send([{"message": "User not found in following"}]);
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
