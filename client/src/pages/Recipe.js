import React, { useEffect, useState } from 'react';
import { __GetRecipe } from '../Services/RecipeService'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

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
      <div className="grid-wrap" style={{ display: "grid", gridTemplateColumns: "50% 50%", width: "80%", marginTop: "5vh", margin: "0 auto" }}>
        <div className="row">
          <div className="col s12 m7" style={{ width: "85%" }}>
            <div className="card" style={{ backgroundColor: "black" }}>
              <div className="card-image">
                <img src="https://images.pexels.com/photos/3724/food-morning-breakfast-orange-juice.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              </div>
              <div className="card-action">
                <Link to="/breakfast"> Breakfast Recipes </Link>
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
                <Link to="/lunch"> Lunch Recipes </Link>
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
                <Link to="/dinner"> Dinner Recipes </Link>
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
              <div className="card-action">
                <Link to="/sweets"> Sweets Recipes </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Recipe

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