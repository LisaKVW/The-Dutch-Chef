const Router = require('express').Router()
const controller = require('../controllers/ChefController')

Router.post('/hire', controller.CreateChef)  // in insomnia - POST: http://localhost:3004/api/chef/hire   - CREATE CHEF
Router.get('/:chef_id', controller.getOneChef)  // in insomnia - GET: http://localhost:3004/api/chef/chef  -  with the CHEF, you make recipe/story


module.exports = Router
