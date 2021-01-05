const { Stories } = require('../models')

//insomnia test- POST:  http://localhost:3004/api/stories/1  -number is id of chef - so ALWAYS 1, only 1 chef
const CreateStory = async (req, res) => {
  try {
    const newStory = new Stories({ ...req.body, stories_id: req.params.stories_id }) // we request the body of our page, and call our chef id - this to create a new chef inside chef parameters via the spread operator
    newStory.save()  //then we save this new chef created and send that to our server
    res.send(newStory)
  } catch (error) {
    throw error
  }
}

//in insomnia - GET: http://localhost:3004/api/stories/view/3  -number is id of story
const getOneStory = async (req, res) => {
  try {
    const oneStory = await Stories.findByPk(req.params.stories_id) //findByPk - find by primary key
    res.send(oneStory)
  } catch (error) { }
  throw error
}

// //in insomenia - GET: http://localhost:3004/api/stories/view
const GetAllStories = async (req, res) => {
  try {
    const allStories = await Stories.findAll()
    res.send(allStories)
  } catch (error) {
    throw error
  }
}

// in insomnnia - PUT: http://localhost:3004/api/stories/6    -number is id of story
const UpdateStory = async (req, res) => {
  try {
    let storyId = parseInt(req.params.stories_id)
    let updatedStory = await Stories.update(req.body, {
      where: { id: storyId },
      returning: true
    })
    res.send(updatedStory)
  } catch (error) {
    throw error
  }
}

// in insomnia: DELETE: http://localhost:3004/api/stories/6  -number is id of story
const DeleteStory = async (req, res) => {
  try {
    let storyId = parseInt(req.params.stories_id)
    await Stories.destroy({ where: { id: storyId } })
    res.send({ message: `Deleted story with an id of ${storyId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateStory,
  getOneStory,
  GetAllStories,
  UpdateStory,
  DeleteStory
}