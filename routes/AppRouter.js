const Router = require('express').Router()
const ChefRouter = require('./ChefRouter')
const RecipeRouter = require('./RecipeRouter')
const StoriesRouter = require('./StoriesRouter')
const RecipeImgRouter = require('./RecipeImgRouter')

Router.use('/chef', ChefRouter)
Router.use('/recipe', RecipeRouter)
Router.use('/stories', StoriesRouter)
Router.use('/image', RecipeImgRouter)
module.exports = Router
