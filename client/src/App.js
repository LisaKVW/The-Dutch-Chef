import React, { useState, useEffect } from 'react'
import { __GetRecipe } from './Services/RecipeService'
import { __GetStories } from './Services/StoriesService'

import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RecipeTypes from './pages/RecipeTypes'
import Stories from './pages/Stories'
import SingleRecipe from './pages/SingleRecipe'
import Category from './pages/Category'
import Navbar from './components/NavBar'
import 'materialize-css/dist/css/materialize.min.css'

function App(props) {
  const [recipes, setRecipes] = useState([])
  const [breakfasts, setBreakfasts] = useState([])
  const [lunches, setLunches] = useState([])
  const [dinners, setDinners] = useState([])
  const [sweets, setSweets] = useState([])
  const [stories, setStories] = useState([])

  //set state for each catergory recipe, so we can grab the props from it throughout app

  useEffect(() => {
    const getRecipe = async (props) => {
      const recipeList = await __GetRecipe(props)
      let breakfasts = []
      let lunches = []
      let dinners = []
      let sweets = []
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

  // for STORIES props below
  useEffect(() => {
    const getStories = async (props) => {
      let stories = []
      const storyList = await __GetStories(props)
      console.log(storyList)
      storyList.forEach(story => {
        stories.push(story)
      })
      setStories(stories)
    }
    getStories()
  }, [])

  const sendStory = {
    stories
  }


  return (
    <div className="App">
      <Navbar />
      <main style={{ margin: "auto", width: "50 %", border: "3px", padding: "10px" }}>
        <Switch>
          <Route
            exact path="/"
            component={(props) => <LandingPage {...props} />}
          />
          <Route
            path="/recipe-types"
            component={(props) => <RecipeTypes {...props} />}
          />
          <Route
            path="/food-stories"
            component={Stories}
            component={(props) => <Stories sendStory={sendStory} {...props} />}
          />
          <Route
            path="/category"
            component={(props) => <Category categories={categories} {...props} />}
          />
          <Route
            path="/recipe/:dish_id"
            component={SingleRecipe}
          />
        </Switch>
      </main>
    </div>
  );
}

export default withRouter(App)

//Source setting up: newsletter https://dev.to/itnext/setting-up-a-news-letter-with-react-and-mailchimp-2f6p 