'use strict'
const { 	
    findAllCategories
} = require('../models/repo/category.repo')

class CategoryService {
    static getAllCategories = async () => {
        const categories = await findAllCategories()
        return categories
    }
}

module.exports = CategoryService