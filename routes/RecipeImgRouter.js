const Router = require('express').Router()
const controller = require('../controllers/RecipeImgController')

Router.post('/add/:recipe_id', controller.CreateRecipeImg)  //recipeImg/post

module.exports = Router
