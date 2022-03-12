const { response } = require('express');
const express = require('express');
const { json } = require('express/lib/response');
const followsController = require('../controllers/follows');

const router = express.Router();


router.get('/followers', followsController.getFollowers);

router.get('/following', followsController.getFollowing);

router.post('/', followsController.addFollow);

router.delete('/', followsController.deleteFollow);

module.exports = router;
