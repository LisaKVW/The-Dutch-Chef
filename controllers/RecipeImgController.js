const { RecipeImg } = require('../models')

// / add /: recipe_id'
//insomnia test- POST:  http://localhost:3004/api/image/add/recipe_id  -number is id of recipe
const CreateRecipeImg = async (req, res) => {
  try {
    const newPhoto = await RecipeImg.create(req.body)
    res.send(newPhoto)
  } catch (error) {
    // throw error
    console.log("heroku error img", error)
  }
}

const getOneRecipeImg = async (req, res) => {
  try {
    const oneRecipeImg = await RecipeImg.findByPk(req.params.recipe_img_id) //findByPk - find by primary key
    res.send(oneRecipeImg)
  } catch (error) {
    throw error
    // console.log("line21", error) 
  }
}

//in insomenia - GET: http://localhost:3004/api/image/view
const GetAllRecipesImgs = async (req, res) => {
  try {
    const allRecipesImgs = await RecipeImg.findAll()
    res.send(allRecipesImgs)
  } catch (error) {
    throw error
  }
}

////in insomenia - GET: http://localhost:3004/api/image/update/recipe_img_id
const UpdateRecipeImg = async (req, res) => {
  try {
    let recipeImgId = parseInt(req.params.recipe_id)
    let updatedRecipeImg = await Recipe.update(req.body, {
      where: { id: recipeImgId },
      returning: true
    })
    res.send(updatedRecipeImg)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateRecipeImg,
  getOneRecipeImg,
  GetAllRecipesImgs,
  UpdateRecipeImg
}

// in insomnia:
// {
//   "image": "https://i.imgur.com/79Up2tZ.jpg",
//     "recipe_id": 1
// }