import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import { changeDefaultPasswordPath } from './constants/RoutePathConstants'

import ChangeDefaultPasswordView from './views/ChangeDefaultPasswordView'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path={changeDefaultPasswordPath}
            component={ChangeDefaultPasswordView}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App
