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
    <div className="wrapper" style={{ margin: "0 auto" }}>
      <div className="grid-hold" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", width: "80%", marginTop: "6vh", margin: "0 auto", columnGap: "4%", rowGap: "0" }}>
        {chosenCategory.map(dish => {
          return (
            <div className="row" style={{ gridGap: "2%" }}>
              <div className="card" style={{ backgroundColor: "black" }}>
                <div className="card-image" >
                  {dish.RecipeImgs.map((pict) => {
                    const { image } = pict
                    // console.log(pict)
                    return <img src={image} />
                  })}
                  <div className="card-stacked" style={{ maxHeight: "100px", diplay: "inline-block" }}>
                  </div>
                  <div className="card-action" style={{ padding: "3% 2%" }}>
                    <NavLink to={{ pathname: `/recipe/${dish.id}`, state: {} }}>  {dish.title}  </NavLink>
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


