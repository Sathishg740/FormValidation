import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { useState } from 'react';

function App() {
const [getLogin, setgetLogin] = useState([])
console.log(getLogin);

let getUserData=(userData)=>{
setgetLogin(...getLogin,userData)
}
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path='/login'>
            <Login getUserData={getUserData}/>
          </Route>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
