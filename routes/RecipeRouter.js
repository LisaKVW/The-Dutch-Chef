const Router = require('express').Router()
const controller = require('../controllers/RecipeController')

Router.post('/:user_id', controller.CreateRecipe)
Router.get('/view/:recipe_id', controller.getOneRecipe)
Router.get('/view/', controller.GetAllRecipes)
Router.put('/:recipe_id', controller.UpdateRecipe)
Router.delete('/:recipe_id', controller.DeleteRecipe)

module.exports = Router
