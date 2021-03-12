import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchPage from './components/SearchPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (

<div className="app">
      <Router>
        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>

      
              {/* Home (the one with the search on) */}
              {/* SearchPage (Results Page) */}
    </div>
  );
}

export default App;
