import React, { useEffect, useState } from 'react';
import { __GetRecipe } from '../Services/RecipeService'
import NavBar from '../components/NavBar'


const Breakfast = (props) => {
  const [recipes, setRecipes] = useState([])
  const [title, setTitle] = useState([])
  const [category, setCategory] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState([])
  const [tips, setTips] = useState([])
  const [image, setImage] = useState([])


  useEffect(() => {
    const getRecipe = async (props) => {
      const recipeList = await __GetRecipe(props)
      console.log('list recipe', recipeList)
      setRecipes(recipeList)

    }
    getRecipe()
  }, [])
  // calling the service inside the useEffect - this to setState
  // invoking the getRecipe() to setState

  return (
    <div>
      <NavBar />
      <div className="grid-wrap" style={{ display: "grid", gridTemplateRows: "50% 50%", width: "80%", marginTop: "5vh", margin: "0 auto" }}>
        <div className="left-col">
          {recipes.map((recipe, index) => {
            const { title, ingredients, instructions, tips, category, RecipeImgs } = recipe
            console.log('recipe_id', recipe.id)
            if (category === "Breakfast") {
              return (
                <div key={index}>
                  <h3> {title} </h3>
                  {RecipeImgs.map((pict) => (
                    <img src={pict.image} style={{ width: "45%", height: "45%", borderRadius: "5px" }} />
                  ))}
                  <p> Ingredients: {ingredients} </p>
                  <p> Instructions: {instructions}</p>
                  <p> Tips: {tips} </p>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Breakfast

// image had to be single as in the model we called it image