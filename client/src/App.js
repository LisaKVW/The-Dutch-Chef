import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Recipe from './pages/Recipe'

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
            path="/"
            component={Recipe}
          />
        </Switch>
      </main>
    </div>
  );
}

export default withRouter(App)

//Source setting up: newsletter https://dev.to/itnext/setting-up-a-news-letter-with-react-and-mailchimp-2f6p 