'use strict'
const { 	
    findAllCategories
} = require('../models/repo/category.repo')
const categoryModel = require('../models/category.model')

class CategoryService {
    static getAllCategories = async () => {
        const categories = await findAllCategories()
        return categories
    }

    static addCategory = async ({category_id, category_title, category_thumbnail, category_backcolor, category_playlists}) => {        
        return await categoryModel.create({
            category_id, category_title, category_thumbnail, category_backcolor, category_playlists
        })
    }
}

module.exports = CategoryService