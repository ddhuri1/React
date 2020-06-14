import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Post from './Components/Post';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path = "/" component={Home}/>
              <Route path = "/about" component={About}/>
              <Route path = "/:post_id" component={Post}/>
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
