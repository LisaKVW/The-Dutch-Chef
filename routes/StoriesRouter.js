const Router = require('express').Router()
const controller = require('../controllers/StoriesController')

Router.post('/:user_id', controller.CreateStory)
Router.get('/view/:stories_id', controller.getOneStory)
Router.get('/view', controller.GetAllStories)
Router.put('/:stories_id', controller.UpdateStory)
Router.delete('/:stories_id', controller.DeleteStory)


module.exports = Router
