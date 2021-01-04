const Router = require('express').Router()
const ChefRouter = require('./ChefRouter')
const RecipeRouter = require('./RecipeRouter')
const StoriesRouter = require('./StoriesRouter')
Router.use('/chef', ChefRouter)
Router.use('/recipe', RecipeRouter)
Router.use('/stories', StoriesRouter)
module.exports = Router
