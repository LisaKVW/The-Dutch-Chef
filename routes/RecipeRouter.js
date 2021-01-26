const Router = require('express').Router()
const controller = require('../controllers/RecipeController')

Router.post('/:chef_id', controller.CreateRecipe)
Router.get('/view/:recipe_id', controller.getOneRecipe)
Router.get('/view/', controller.GetAllRecipes)
Router.put('/:recipe_id', controller.UpdateRecipe)
Router.delete('/:recipe_id', controller.DeleteRecipe)

//new   - path will be recipe/multi/:chef_id
Router.post('/multi/:chef_id', controller.CreateRecipeWithImg)

module.exports = Router
