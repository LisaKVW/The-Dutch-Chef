import React, { useState, useEffect } from 'react'
import { __GetRecipe } from './Services/RecipeService'

import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Recipe from './pages/Recipe'
import Stories from './pages/Stories'
import BreakfastSingleRecipe from './pages/BreakfastSingleRecipe'
import Category from './pages/Category'

function App(props) {
  const [recipes, setRecipes] = useState([])
  const [breakfasts, setBreakfasts] = useState([])
  const [lunches, setLunches] = useState([])
  const [dinners, setDinners] = useState([])
  const [sweets, setSweets] = useState([])

  useEffect(() => {
    const getRecipe = async (props) => {
      const recipeList = await __GetRecipe(props)
      let breakfasts = []
      let lunches = []
      let dinners = []
      let sweets = []
      console.log('list recipe', recipeList)
      recipeList.forEach(recipe => {
        if (recipe["category"] === "Breakfast") {
          breakfasts.push(recipe)
        } else if (recipe["category"] === "Lunch") {
          lunches.push(recipe)
        } else if (recipe["category"] === "Dinner") {
          dinners.push(recipe)
        } else {
          sweets.push(recipe)
        }
      })
      console.log('app breaky', breakfasts)
      setBreakfasts(breakfasts)
      setLunches(lunches)
      setDinners(dinners)
      setSweets(sweets)
    }
    getRecipe()
  }, [])

  const categories = {
    breakfasts,
    lunches,
    dinners,
    sweets
  }
  // this done to shorten the below: <Category categories={categories} {...props} />}

  return (
    <div className="App">
      <main>
        <Switch>
          <Route
            exact path="/"
            component={(props) => <LandingPage {...props} />}
          />
          <Route
            path="/recipe"
            component={(props) => <Recipe {...props} />}
          />
          <Route
            path="/food-stories"
            component={Stories}
          />
          <Route
            path="/category"
            component={(props) => <Category categories={categories} {...props} />}
          />
          <Route
            path="/breakfast-recipe"
            component={BreakfastSingleRecipe}
          />
        </Switch>
      </main>
    </div>
  );
}

export default withRouter(App)

//Source setting up: newsletter https://dev.to/itnext/setting-up-a-news-letter-with-react-and-mailchimp-2f6p 