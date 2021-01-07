import React, { useEffect, useState } from 'react';
import { __GetRecipe } from '../Services/RecipeService'
import { NavLink } from 'react-router-dom'

const RecipeTypes = (props) => {
  const [recipes, setRecipes] = useState([])
  const [category, setCategory] = useState([])  //breakfast, lunch, dinner, sweets

  useEffect(() => {
    const getRecipeCategory = async (props) => {
      const recipeListCategory = await __GetRecipe(props)
      setRecipes(recipeListCategory)
    }
    getRecipeCategory()
  }, [])
  
  // by adding props to NavLink - we made the location path available inside of props
  // Navlink is taking from our Category.js
  console.log('breaky4', props)
  return (
    <div>
      <div className="grid-wrap" style={{ display: "grid", gridTemplateColumns: "50% 50%", width: "80%", marginTop: "5.3vh", margin: "0 auto" }}>
        <div className="row">
          <div className="col s12 m7" style={{ width: "85%" }}>
            <div className="card" style={{ backgroundColor: "black" }}>
              <div className="card-image">
                <img src="https://images.pexels.com/photos/3724/food-morning-breakfast-orange-juice.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              </div>
              <div className="card-action">
                <NavLink {...props} to={{ pathname: "/category", state: { category: "breakfast" } }}> Breakfast Recipes </NavLink>

              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m7" style={{ width: "85%" }}>
            <div className="card" style={{ backgroundColor: "black" }}>
              <div className="card-image">
                <img src="https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              </div>
              <div className="card-action">
                <NavLink {...props} to={{ pathname: "/category", state: { category: "lunch" } }}> Lunch Recipes </NavLink>

              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m7" style={{ width: "85%" }}>
            <div className="card" style={{ backgroundColor: "black" }}>
              <div className="card-image">
                <img src="https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              </div>
              <div className="card-action">
                <NavLink {...props} to={{ pathname: "/category", state: { category: "dinner" } }}> Dinner Recipes </NavLink>

              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m7" style={{ width: "85%" }}>
            <div className="card" style={{ backgroundColor: "black" }}>
              <div className="card-image">
                <img src="https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              </div>
              <div className="card-action" >
                <NavLink {...props} to={{ pathname: "/category", state: { category: "sweets" } }}> Sweets Recipes </NavLink>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RecipeTypes

// {
//   recipes.map((recipe) => {
//     const { category } = recipe
//     return (
//       <div>
//         <h2> {category} </h2>
//       </div>
//     )
//   })
// }