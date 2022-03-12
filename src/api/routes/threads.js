const express = require('express');
const { json } = require('express/lib/response');
const threadsController = require('../controllers/threads');

const router = express.Router();

router.get('/', threadsController.getAll);

router.get('/:threadId', threadsController.getThreadById);

router.get('/me/:userId', threadsController.getMyThreads);

router.get('/user/:userId', threadsController.getUserThreads);

router.post('/', threadsController.addThread);

router.put('/:threadId', threadsController.updateThread);

router.delete('/:threadId', threadsController.deleteThread);

module.exports = router;
