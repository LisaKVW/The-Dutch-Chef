import React, { useEffect, useState } from 'react';
import { __GetRecipe } from '../Services/RecipeService'
import NavBar from '../components/NavBar'

const Recipe = (props) => {
  const [recipes, setRecipes] = useState([])
  const [category, setCategory] = useState([])  //breakfast, lunch, dinner, sweets

  useEffect(() => {
    const getRecipeCategory = async (props) => {
      const recipeListCategory = await __GetRecipe(props)
      setRecipes(recipeListCategory)
    }
    getRecipeCategory()
  }, [])

  return (
    <div>
      <NavBar />
      {recipes.map((recipe) => {
        const { category } = recipe
        return (
          <div>
            <h2> {category} </h2>
          </div>
        )
      })}
    </div>
  )
}

export default Recipe