const { Recipe } = require('../models')
const { RecipeImg } = require('../models')
import { recipe } from '../data/dataRecipeImg'

// CONTROLLER to post recipe and IMG to HEROKU
const CreateRecipeWithImg = async (req, res) => {
  try {
    const newRecipe = await Recipe.(req.body) // we request the body of our page, and call our chef id - this to create a new chef inside chef parameters via the spread operator
    console.log(req.body, req.params)
    res.send(newRecipe)
  } catch (error) {
    throw error
  }
}


//insomnia test- POST:  http://localhost:3004/api/recipe/1   -number is id of chef - so ALWAYS 1, only 1 chef
const CreateRecipe = async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body) // we request the body of our page, and call our chef id - this to create a new chef inside chef parameters via the spread operator
    console.log(req.body, req.params)
    res.send(newRecipe)
  } catch (error) {
    throw error
  }
}

//in insomnia - GET: http://localhost:3004/api/recipe/view/1  -number is id of recipe
const getOneRecipe = async (req, res) => {
  try {
    const oneRecipe = await Recipe.findByPk(req.params.recipe_id, {
      include: [
        { model: RecipeImg, attributes: ["image", "recipeId"] },
      ],
    })
    res.send(oneRecipe)
  } catch (error) {
    throw error
    // console.log("line21", error) 
  }
}

const GetAllRecipes = async (req, res) => {
  try {
    const allRecipes = await Recipe.findAll({
      include: [
        { model: RecipeImg, attributes: ["image", "recipeId"] },
      ],
    })
    res.send(allRecipes)
  } catch (error) {
    throw error
  }
}

// in insomnnia - PUT: http://localhost:3004/api/recipe/3    -number is id of recipe
const UpdateRecipe = async (req, res) => {
  try {
    let recipeId = parseInt(req.params.recipe_id)
    let updatedRecipe = await Recipe.update(req.body, {
      where: { id: recipeId },
      returning: true
    })
    res.send(updatedRecipe)
  } catch (error) {
    throw error
  }
}

// in insomnia: DELETE: http://localhost:3004/api/recipe/3    -number is id of recipe
const DeleteRecipe = async (req, res) => {
  try {
    let recipeId = parseInt(req.params.recipe_id)
    await Recipe.destroy({ where: { id: recipeId } })
    res.send({ message: `Deleted recipe with an id of ${recipeId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateRecipe,
  getOneRecipe,
  GetAllRecipes,
  UpdateRecipe,
  DeleteRecipe,
  CreateRecipeWithImg 
}