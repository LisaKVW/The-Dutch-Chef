const { Chef, Recipe, Stories } = require('./models')

// create Chef
const createChef = async () => {
  const oneChef = await Chef.create({
    name: 'Lisa'
  })
  console.log(oneChef)
}

// create Recipe
const createRecipe = async () => {
  const oneRecipe = await Recipe.create({
    title: 'Banana Bread',
    category: 'Sweets',
    ingredients: 'banana, flour, sugar',
    instructions: 'mix and bake',
    tips: 'add some cinnamon',
    images: 'test',
    chef_id: 1
  })
  console.log(oneRecipe)
}
// Create Food Story
const createStory = async () => {
  const oneStory = await Stories.create({
    title: 'Omakase during Pandemic',
    story: 'Ishikawa - sushi heaven',
    images: 'sushi',
    chef_id: 1
  })
  console.log(oneStory)
}
  // GET

  //UPDATE

  // DELETE


  const run = async () => {
    try {
      // await createChef()
      // await createRecipe()
      await createStory()

    } catch (error) {
      throw error
    }
  }

  run()