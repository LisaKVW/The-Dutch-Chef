import React, { useEffect, useState } from 'react';
import { __GetRecipe } from '../Services/RecipeService'
import NavBar from '../components/NavBar'


const Recipe = (props) => {
  const [recipe, setRecipe] = useState([])
  const [titel, setTitle] = useState([])
  const [category, setCategory] = useState([])
  const [image, setImage] =useState([])
  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState([])
  const [tips, setTips] = useState([])

  useEffect(() => {
    getRecipe()
  }, [])

  const getRecipe = async () => {
    const showRecipe = await __GetRecipe(props.data)
    console.log('recipe 13', showRecipe)
  }

  return (
    <div>
      <NavBar />

    </div>
  )
}

export default Recipe