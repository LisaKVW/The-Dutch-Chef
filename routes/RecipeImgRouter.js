const Router = require('express').Router()
const controller = require('../controllers/RecipeImgController')

Router.post('/add/:recipe_id', controller.CreateRecipeImg)  //image
Router.get('/view/:recipe_img_id', controller.getOneRecipeImg)
Router.get('/view/', controller.GetAllRecipesImgs)
Router.get('/update/:recipe_img_id', controller.UpdateRecipeImg)

module.exports = Router
