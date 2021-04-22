import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Committee from "./components/Committee";
import Dates from "./components/Dates";
import Workshop from "./components/Workshop";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Paper from "./components/Paper";
import Logo from "./components/images/logo.png";
import Ssn from "./components/images/ssnbg.jpeg";



function App() {
  return (
    <div className="App">
      <img src={Logo} alt="logo" className="logo"/>
      <div className="header">
                    <h1>SSN College of Engineering</h1>
                    <h2>Department of Computer Science and Engineering</h2>
                    <h2>International Conference on Computational Intelligence in Data Science</h2>
      </div>
      <img src={Ssn} alt="bg" class="bg_img"/>
       <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/committee">
            <Committee/>
          </Route>
          <Route exact path="/paper">
            <Paper/>
          </Route>
          <Route exact path="/dates">
            <Dates/>
          </Route>
          <Route exact path="/workshop">
            <Workshop/>
          </Route>
          <Route exact path="/registration">
            <Registration/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </Router>
      <div className="footer">&copy;Copyright 2020</div>
    </div>
  );
}

export default App;
