import React, { useEffect, useState } from 'react';
import { __GetRecipeById } from '../Services/RecipeService'

const SingleRecipe = (props) => {
  // console.log('line 5', props.match)
  const [myRecipe, setMyRecipe] = useState(null)

  console.log("rendering", myRecipe)


  const getRecipe = async () => {
    try {
      const recipe = await __GetRecipeById(props.match.params.dish_id)
      // console.log("recipe 2", recipe)
      setMyRecipe(recipe)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    getRecipe()
  }, [props.match.params.dish_id])


  return (!myRecipe ? <div></div> :
    <div>
      <h3>{myRecipe.title}</h3>
      {myRecipe.RecipeImgs.map((image, index) => {
        return <img key={index} src={image.image} alt="food image" />
      })}
      <p>{myRecipe.ingredients}</p>
      <p>{myRecipe.instructions}</p>
      <p>{myRecipe.tips}</p>
    </div>

  )
}

export default SingleRecipe