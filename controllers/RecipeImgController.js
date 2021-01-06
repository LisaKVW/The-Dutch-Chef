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

module.exports = {
  CreateRecipeImg
}

// in insomnia:
// {
//   "image": "https://i.imgur.com/79Up2tZ.jpg",
//     "recipe_id": 1
// }