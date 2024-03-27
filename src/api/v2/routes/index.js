'use strict'

const express = require('express');
const router = express.Router();

router.use('/songs', require('./song'))
// router.use('/playlist', require('./playlist'))

module.exports = router;
