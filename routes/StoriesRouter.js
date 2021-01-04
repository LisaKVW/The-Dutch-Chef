const Router = require('express').Router()
const controller = require('../controllers/StoriesController')

Router.post('/:user_id', controller.CreateStory)
// Router.get('/view/:stories_id', controller.GetStoriesDetails)
// Router.put('/:stories_id', controller.UpdateStories)
// Router.delete('/:stories_id', controller.DeleteStories)

module.exports = Router
