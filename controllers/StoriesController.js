const { Stories } = require('../models')

//insomnia test- POST:  http://localhost:3004/api/recipe/1   -number is id of chef - so ALWAYS 1, only 1 chef
const CreateStory = async (req, res) => {
  try {
    const newStory = new Stories({ ...req.body, stories_id: req.params.stories_id }) // we request the body of our page, and call our chef id - this to create a new chef inside chef parameters via the spread operator
    newStory.save()  //then we save this new chef created and send that to our server
    res.send(newStory)
  } catch (error) {
    throw error
  }
}

// //in insomnia - GET: http://localhost:3004/api/recipe/view/1  -number is id of recipe
// const getOneRecipe = async (req, res) => {
//   try {
//     const oneRecipe = await Recipe.findByPk(req.params.recipe_id) //findByPk - find by primary key
//     res.send(oneRecipe)
//   } catch (error) { }
//   throw error
// }

// //in insomenia - GET: http://localhost:3004/api/recipe/view
// const GetAllRecipes = async (req, res) => {
//   try {
//     const allRecipes = await Recipe.findAll()
//     res.send(allRecipes)
//   } catch (error) {
//     throw error
//   }
// }

// // in insomnnia - PUT: http://localhost:3004/api/recipe/3    -number is id of recipe
// const UpdateRecipe = async (req, res) => {
//   try {
//     let recipeId = parseInt(req.params.recipe_id)
//     let updatedRecipe = await Recipe.update(req.body, {
//       where: { id: recipeId },
//       returning: true
//     })
//     res.send(updatedRecipe)
//   } catch (error) {
//     throw error
//   }
// }

// // in insomnia: DELETE: http://localhost:3004/api/recipe/3    -number is id of recipe
// const DeleteRecipe = async (req, res) => {
//   try {
//     let recipeId = parseInt(req.params.recipe_id)
//     await Recipe.destroy({ where: { id: recipeId } })
//     res.send({ message: `Deleted recipe with an id of ${recipeId}` })
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
  CreateStory 
  // getOneRecipe,
  // GetAllRecipes,
  // UpdateRecipe,
  // DeleteRecipe
}