const express = require('express');

const { UserController } = require('../controllers');

const router = express.Router();

router.get('/', UserController.list);
router.put('/:id', UserController.update);

module.exports = router;
