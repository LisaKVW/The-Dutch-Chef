import React, { useEffect, useState } from 'react';
import { __GetRecipe } from '../Services/RecipeService'

const Recipe = (props) => {
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    getRecipe()
  },[])

  const getRecipe = async () => {
    const showRecipe = await __GetRecipe(props)
    console.log('recipe 13', showRecipe)
  }

  return (
    <div>
      
    </div>
  )
}

export default Recipe