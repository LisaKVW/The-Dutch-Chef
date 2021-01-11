import React, { useEffect, useState } from 'react';
import { __GetRecipeById } from '../Services/RecipeService'

const SingleRecipe = (props) => {
  const [myRecipe, setMyRecipe] = useState(null)

  console.log("rendering", myRecipe)


  const getRecipe = async () => {
    try {
      const recipe = await __GetRecipeById(props.match.params.dish_id)
      setMyRecipe(recipe)
    } catch (error) {
      throw error
    }
  }


  useEffect(() => {
    getRecipe()
  }, [props.match.params.dish_id])


  return (!myRecipe ? <div></div> :
    <div className="recipe-wrap" style={{ width: "80%", borderRadius: "14px", border: "2px solid white", boxShadow: "1px 8px 8px 8px #eeeeee", marginLeft: "10%" }}>
      <h3>{myRecipe.title}</h3>
      {myRecipe.RecipeImgs.map((image, index) => {
        return <img key={index} src={image.image} alt="food image" style={{ width: "35%", borderRadius: "5px", height:"35%" }} />
      })}

      <ul style={{ display: "inline", textAlign: "left" }}>
        <div>
          <span style={{ fontWeight: "bold", marginLeft: "10px" }}> Ingredients: </span>
        </div>
        {myRecipe.ingredients.map((ingredients) => <li style={{ marginLeft: "15px" }}>  {ingredients} </li>)}
      </ul>

      <ul style={{ display: "inline", textAlign: "left" }}>
        <div className="title-instructions" style={{ marginTop: "8px" }}>
          <span style={{ fontWeight: "bold", marginLeft: "10px" }}> Instructions: </span>
        </div>
        {myRecipe.instructions.map((instruction) => <li style={{ marginLeft: "15px" }}>  {instruction} </li>)}
      </ul>
      
      <ul style={{ display: "inline", textAlign: "left" }}>
        <div className="title-tips" style={{ marginTop: "8px" }}>
        <span style={{ fontWeight: "bold", marginLeft: "10px" }}> Tips: </span>
        </div>
        {myRecipe.tips.map((tip) => <li style={{ marginLeft: "15px" }} > {tip} </li>)}
      </ul>
    </div>
  )
}

export default SingleRecipe

