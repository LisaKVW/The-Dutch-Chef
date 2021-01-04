const { Chef } = require('../models')

const CreateChef = async (req, res) => {
  try {
    const newChef = new Chef({ ...req.body, chef_id: req.params.chef_id }) // we request the body of our page, and call our chef id - this to create a new chef inside chef parameters via the spread operator
    newChef.save()  //then we save this new chef created and send that to our server
    res.send(newChef)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateChef
}