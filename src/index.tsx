import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'
import App from './App'
import makeStore from './redux/store'

const store = makeStore()

const WithProvider = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)
ReactDOM.render(<WithProvider />, document.getElementById('root'))
