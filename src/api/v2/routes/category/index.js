'use strict'

const express = require('express')
const CategoryController = require('../../controllers/category.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const router = express.Router()

router.post('/add', asyncHandler(CategoryController.addCategory))
router.get('', asyncHandler(CategoryController.getAllCategories))

module.exports = router