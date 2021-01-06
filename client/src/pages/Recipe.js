import React, { useEffect, useState } from 'react';
import { __GetRecipe } from '../Services/RecipeService'
import NavBar from '../components/NavBar'


const Recipe = (props) => {
  const [recipes, setRecipes] = useState([])
  const [title, setTitle] = useState([])
  const [category, setCategory] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState([])
  const [tips, setTips] = useState([])
  // const [image, setImage] = useState([])


  useEffect(() => {
    const getRecipe = async (props) => {
      const recipeList = await __GetRecipe(props)
      setRecipes(recipeList)
    }
    getRecipe()
  }, [])
  // calling the service inside the useEffect - this to setState


  return (
    <div>
      <NavBar />
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
  )
}

export default Recipe