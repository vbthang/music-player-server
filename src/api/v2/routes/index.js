'use strict'

const express = require('express');
const router = express.Router();

router.use('/categories', require('./category'))
router.use('/songs', require('./song'))
router.use('/playlists', require('./playlist'))
router.use('/users', require('./user'))

module.exports = router;
