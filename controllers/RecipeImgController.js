const { RecipeImg } = require('../models')

//insomnia test- POST:  http://localhost:3004/api/image/add  -number is id of chef - so ALWAYS 1, only 1 chef
const CreateRecipeImg = async (req, res) => {
  try {
    const newPhoto = await RecipeImg.create(req.body)
    res.send(newPhoto)
  } catch (error) {
    throw error
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

//in insomenia - GET: http://localhost:3004/api/recipe/view
const GetAllRecipesImgs = async (req, res) => {
  try {
    const allRecipesImgs = await RecipeImg.findAll()
    res.send(allRecipesImgs)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateRecipeImg,
  getOneRecipeImg,
  GetAllRecipesImgs
}

// in insomnia:
// {
//   "image": "https://i.imgur.com/79Up2tZ.jpg",
//     "recipe_id": 1
// }