const Router = require('express').Router()
const controller = require('../controllers/RecipeImgController')

Router.post('/add', controller.CreateRecipeImg)  //recipeImg/post

module.exports = Router
