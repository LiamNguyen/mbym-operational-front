import React from 'react'
import './App.css'
import { Login } from './views/Login.view'
import { ResetPassword } from './views/ResetPassword.view'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './components/private-route.comp'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute
            path="/reset-password"
            component={ResetPassword}
            isAuthenticated={true}
          >
            {/* <ResetPassword /> */}
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  )
}

export default App
