import React from 'react';
import logo from './logo.svg';
import './App.css';
import Floorplan from "./Floorplan"
import Homepage from "./Homepage"
import Projects from "./Projects"
import About from "./About"

import { Link, Route, Switch} from "react-router-dom"


function App() {
  return (
    <div>
      <nav>
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to ='/projects'>
          <h4>Projects</h4>
        </Link>
        <Link to="/about">
          <h4>About</h4>
        </Link>
      </nav>
        
    <main>
      
      <Switch>
      <Route exact path="/" component={Floorplan}/>
      <Route exact path="/projects" component={Projects}/> 
      <Route exact path="/about" component={About}/>  
      </Switch>
    </main>
    
    </div>
    
    
  );
}

export default App;
