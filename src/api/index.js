const express = require('express');

const emojis = require('./emojis');
const user = require('./controllers/user');
const threads = require('./controllers/threads');
const follows = require('./controllers/follows');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/user', user);
router.use('/threads', threads);
router.use('/follows', follows);


module.exports = router;
