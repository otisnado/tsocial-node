const { response } = require('express');
const express = require('express');
const { json } = require('express/lib/response');
const userController = require('../controllers/user');

const router = express.Router();

router.get('/', userController.findAll);

router.get('/:username', userController.findByUsername);

router.get('/one/:userId', userController.findById);

router.post('/', userController.addOne);

router.put('/:userId', userController.updateOne);

router.delete('/:userId', userController.deleteOne);

module.exports = router;
