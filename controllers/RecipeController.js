const { Recipe } = require('../models')

//insomnia test- POST:  http://localhost:3004/api/recipe/1
const CreateRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe({ ...req.body, recipe_id: req.params.recipe_id }) // we request the body of our page, and call our chef id - this to create a new chef inside chef parameters via the spread operator
    newRecipe.save()  //then we save this new chef created and send that to our server
    res.send(newRecipe)
  } catch (error) {
    throw error
  }
}

//in insomnia - GET: http://localhost:3004/api/recipe/view/1
const getOneRecipe = async (req, res) => {
  try {
    const oneRecipe = await Recipe.findByPk(req.params.recipe_id) //findByPk - find by primary key
    res.send(oneRecipe)
  } catch (error) { }
  throw error
}

module.exports = {
  CreateRecipe,
  getOneRecipe
}