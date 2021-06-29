const express = require('express');
const router = express.Router();
const controller = require('./user.controller');
const auth = require('../../middleware/auth')

router.get('/',  controller.getUser);
router.post('/', controller.saveUser);
router.post('/login', controller.loginUser);
router.put('/status', auth, controller.changeStatus);




module.exports = router;