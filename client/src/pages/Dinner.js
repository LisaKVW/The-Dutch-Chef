import React, { useEffect, useState } from 'react';
import { __GetRecipe } from '../Services/RecipeService'
import { __GetRecipeImg } from '../Services/RecipeImgService'
import NavBar from '../components/NavBar'


const Dinner = (props) => {
  const [recipes, setRecipes] = useState([])
  const [title, setTitle] = useState([])
  const [category, setCategory] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState([])
  const [tips, setTips] = useState([])
  const [imageData, setImageData] = useState([])


  useEffect(() => {
    const getRecipe = async (props) => {
      const recipeList = await __GetRecipe(props)
      console.log('list recipe', recipeList)
      setRecipes(recipeList)

      const recipeImgList = await __GetRecipeImg(props)
      console.log('list imag', recipeImgList)
      setImageData(recipeImgList)
    }
    getRecipe()
  }, [])
  // calling the service inside the useEffect - this to setState
  // invoking the getRecipe() to setState


  return (
    <div>
      <NavBar />
      <div className="grid-wrap" style={{ display: "grid", gridTemplateColumns: "50% 50%", width: "80%", marginTop: "5vh", margin: "0 auto" }}>
        <div className="left-col">
          {recipes.map((recipe, index) => {
            const { title, ingredients, instructions, tips, category, RecipeImgs } = recipe
            console.log('recipe_id', recipe.id)
            if (category === "Dinner") {
              return (
                <div key={index}>
                  <h3> {title} </h3>
                  {RecipeImgs.map((pict) => (
                    <img src={pict.image} style={{ width: "85%", height: "95%", borderRadius: "4px" }} />
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

export default Dinner

// image had to be single as in the model we called it image