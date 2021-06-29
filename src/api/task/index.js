const express = require('express');
const router = express.Router();
const controller = require('./task.controller');
const auth = require('../../middleware/auth')

router.get('/', auth, controller.getTask);
router.post('/', auth, controller.saveTask);
router.put('/:id', auth, controller.updateTask);


module.exports = router;