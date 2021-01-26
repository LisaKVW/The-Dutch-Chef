import { recipesWithImgData } from '../data/dataRecipeImg'
const { Recipe } = require('../models')
const { RecipeImg } = require('../models')

// CONTROLLER to post recipe and IMG to HEROKU
////new   - path will be recipe/multi/:chef_id
const CreateRecipeWithImg = async (req, res) => {
  try {
    let RecipesToCreate = recipesWithImgData.map((recipeArray) => recipeArray[0])  // mapping through the array - now we get each full recipe, e.g. Banana Bread
    const createdRecipes = await Recipe.bulkInsert(RecipesToCreate)  //create vairable that will insert all our data
    console.log(createdRecipes)
    const recipeImgs = createdRecipes.map((recipe, i) => { // to get the images, we need to map through all our recipes, this as the images are in the 2nd object of each recipe array
      const { id: recipeId } = recipe // we deconstruct recipe and rename id TO recipeId
      const url = RecipesToCreate[i][1]['url'] // to get the recipeImg - we need to the deconstrcution
      const newImage = await RecipeImg.create({ url: url, id: recipeId })
      return newImage
      // now we want to return all recipes 
      //with those created recipes - we want to return (res) the matching image, which we can find via recipeId
    })
    console.log('image text', recipeImgs)
    res.send({ createdRecipes: createdRecipes, recipeImgs: recipeImgs })
  } catch (error) {
    throw error
  }
}
// get 1 recipe need to find the matching image via: recipeId
// recipeId?
// at createRecipes creates recipe  - so will get id - that we can match

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