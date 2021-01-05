const { Recipe } = require('../models')

//insomnia test- POST:  http://localhost:3004/api/recipe/1   -number is id of chef - so ALWAYS 1, only 1 chef
const CreateRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe({ ...req.body, recipe_id: req.params.recipe_id }) // we request the body of our page, and call our chef id - this to create a new chef inside chef parameters via the spread operator
    newRecipe.save()  //then we save this new chef created and send that to our server
    res.send(newRecipe)
  } catch (error) {
    throw error
  }
}

//in insomnia - GET: http://localhost:3004/api/recipe/view/1  -number is id of recipe
const getOneRecipe = async (req, res) => {
  try {
    const oneRecipe = await Recipe.findByPk(req.params.recipe_id) //findByPk - find by primary key
    res.send(oneRecipe)
  } catch (error) { 
  throw error
    // console.log("line21", error) 
  }
}

//in insomenia - GET: http://localhost:3004/api/recipe/view
const GetAllRecipes = async (req, res) => {
  try {
    const allRecipes = await Recipe.findAll()
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
  DeleteRecipe
}