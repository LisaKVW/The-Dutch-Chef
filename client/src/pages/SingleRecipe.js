import React, { useEffect, useState } from 'react';
import { __GetRecipeById } from '../Services/RecipeService'

const SingleRecipe = (props) => {
  console.log('line 5', props.match)
  const [myRecipe, setMyRecipe] = useState(null)

  // console.log("single recipe categories", props.categories)
  // console.log("single recipe categories breaky", props.categories.breakfasts)
  // console.log("single recipe categories breaky TITLE", props.categories.breakfasts[0].title)
  // const { title, ingredients, instructions, tips, RecipeImgs } = props.categories.breakfasts[0]
  // console.log('title', title)

  const getRecipe = async () => {
    const recipe = await __GetRecipeById(props.match.params.dish_id)
    console.log("recipe 2",recipe)
    setMyRecipe(recipe)
  }

  useEffect(() => {
    getRecipe()
  }, [props.match.params.dish_id])
  // 

  return (
    <div>
      <h3>{myRecipe.title}</h3>
    </div>
  )
}

export default SingleRecipe