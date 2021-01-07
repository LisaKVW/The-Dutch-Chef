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
    <div className="recipe-wrap" style={{ width: "80%", borderRadius: "14px", border: "1px solid red", marginLeft: "10%" }}>
      <h3>{myRecipe.title}</h3>
      {myRecipe.RecipeImgs.map((image, index) => {
        return <img key={index} src={image.image} alt="food image" style={{ width: "35%", borderRadius: "5px" }} />
      })}
      <p> <span style={{ fontWeight: "bold" }}> Ingredients: </span> {myRecipe.ingredients}</p>
      <p> <span style={{ fontWeight: "bold" }}> Instructions: </span>  {myRecipe.instructions}</p>
      <p> <span style={{ fontWeight: "bold" }}> Tips: </span>  {myRecipe.tips}</p>
    </div>

  )
}

export default SingleRecipe