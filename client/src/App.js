import React from 'react'
import Navbarevent from './components/Navbarevent'
import Logins from './components/Logins'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/Logins" element={<Logins />} />
        <Route exact path="/" element={<Navbarevent />} />
      </Routes>
    </Router>
  )
}

export default App