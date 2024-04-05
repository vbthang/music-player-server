'use strict'

const express = require('express')
const CategoryController = require('../../controllers/category.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const router = express.Router()

router.get('', asyncHandler(CategoryController.getAllCategories))

module.exports = router