import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/home/Home.js';
import Subreddit from './pages/subreddit/Subreddit.js';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/subreddit/:subredditId">
                <Subreddit/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
