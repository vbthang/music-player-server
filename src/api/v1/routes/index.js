'use strict'

const express = require('express');
const router = express.Router();

router.use('/song', require('./song'))
router.use('/album', require('./album'))
router.use('/playlist', require('./playlist'))

module.exports = router;
