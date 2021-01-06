const Router = require('express').Router()
const controller = require('../controllers/RecipeImgController')

Router.post('/add/:recipe_id', controller.CreateRecipeImg)  //image
Router.get('/view/:recipe_img_id', controller.getOneRecipeImg)
Router.get('/view/', controller.GetAllRecipesImgs)

module.exports = Router
