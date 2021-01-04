const Router = require('express').Router()
const controller = require('../controllers/ChefController')

Router.get('/chef', controller.CreateChef)

module.exports = Router
