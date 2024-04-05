'use strict'

const { SuccessResponse } = require('../core/success.response')
const CategoryService = require('../services/category.service')

class CategoryController {
    getAllCategories = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get all categories successfully!',
            metadata: await CategoryService.getAllCategories()
        }).send(res)
    }
}

module.exports = new CategoryController()