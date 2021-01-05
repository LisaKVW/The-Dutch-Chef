const { Chef } = require('../models')

// in insomnia - POST: http://localhost:3004/api/chef/hire   - CREATE CHEF
const CreateChef = async (req, res) => {
  try {
    const newChef = new Chef({ ...req.body, chef_id: req.params.chef_id }) // we request the body of our page, and call our chef id - this to create a new chef inside chef parameters via the spread operator
    newChef.save()  //then we save this new chef created and send that to our server
    res.send(newChef)
  } catch (error) {
    throw error
  }
}
// in insomnia - GET: http://localhost:3004/api/chef/chef  -  with the CHEF, you make recipe/story
const getOneChef = async (req, res) => {
  try {
    const oneChef = await Chef.findByPk(req.params.chef_id) //findByPk - find by primary key
    res.send(oneChef)
  } catch (error) { }
  throw error
}

module.exports = {
  CreateChef,
  getOneChef
}