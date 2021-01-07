import React, { useEffect, useState } from 'react';
import { __GetRecipe } from '../Services/RecipeService'
import { NavLink } from 'react-router-dom'


const Category = (props) => {
  const [chosenCategory, setChosenCategory] = useState(null)
  const [pageloaded, setLoaded] = useState(false)


  useEffect(() => {
    const {
      breakfasts,
      lunches,
      dinners,
      sweets
    } = props.categories //actual loaded data in each category  - chosen category is loading a state via the if, else if
    const { category } = props.location.state
    if (category === "sweets") {
      setChosenCategory(sweets)
    } else if (category === "dinner") {
      setChosenCategory(dinners)
    } else if (category === "lunch") {
      setChosenCategory(lunches)
    } else {
      setChosenCategory(breakfasts)
    }
    setLoaded(true)
  }, [])
  // calling the service inside the useEffect - this to setState
  // invoking the getRecipe() to setState
  // added ternary because - useEffect runs after the return - so without ternary we would have an empty page
  return (!pageloaded ? <div> loading... </div> :

    // <div className="grid-wrap" style={{ display: "grid", gridTemplateColumns: "50% 50%", width: "80%", marginTop: "5.3vh", margin: "0 auto" }}>

    <div className="wrapper" style={{ margin: "0 auto" }}>
      <div className="grid-hold" style={{ display: "grid", gridTemplateColumns: "33% 33% 33%", width: "80%", marginTop: "6vh", margin: "0 auto" }}>
        {chosenCategory.map(dish => {
          console.log('breaky 2', dish)
          return (
            <div className="row">
              <div className="col s12 m7" style={{ width: "85%" }}>

                <div class="card" style={{ backgroundColor: "black" }}>
                  <div class="card-image" >
                    {dish.RecipeImgs.map((pict) => {
                      const { image } = pict
                      // console.log(pict)
                      return <img src={image} />
                    })}
                    <span class="card-title"> {dish.title} </span>
                  </div>
                  <div class="card-action">
                    <NavLink to={{ pathname: `/recipe/${dish.id}`, state: {} }}> See Recipe </NavLink>
                    {/* <NavLink title={category.title} to={{ pathname: "/recipe", state: {} }}> See Recipe </NavLink> */}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Category