import React, { useEffect, useState } from 'react';
import { __GetRecipe } from '../Services/RecipeService'
import { __GetRecipeImg } from '../Services/RecipeImgService'
import NavBar from '../components/NavBar'


const RecipeDetails = (props) => {
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
      console.log(recipeList)
      setRecipes(recipeList)

      const recipeImgList = await __GetRecipeImg(props)
      console.log(recipeImgList)
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
          {recipes.map((recipe) => {
            const { title, ingredients, instructions, tips } = recipe
            return (
              <div>
                <h2> {title} </h2>
                <p> {ingredients} </p>
                <p> {instructions}</p>
                <p> {tips} </p>
              </div>
            )
          })}
        </div>
        <div className="right-col">
          {imageData.map((pict) => {
            const { image } = pict
            return (
              <div>
                <img src={image} style={{ width: "85%", height: "95%", borderRadius: "4px" }} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails

// image had to be single as in the model we called it image