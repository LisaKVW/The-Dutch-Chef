import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Recipe from './pages/Recipe'
import RecipeDetails from './pages/RecipeDetails'
import Stories from './pages/Stories'

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route
            exact path="/"
            component={LandingPage}
          />
          <Route
            path="/recipe"
            component={Recipe}
          />
          <Route
            path="/recipeDetails"
            component={RecipeDetails}
          />
          <Route
            path="/food-stories"
            component={Stories}
          />
        </Switch>
      </main>
    </div>
  );
}

export default withRouter(App)

//Source setting up: newsletter https://dev.to/itnext/setting-up-a-news-letter-with-react-and-mailchimp-2f6p 