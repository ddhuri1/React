import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>HELLO</h1>
        <Switch>
          <Route exact path = "" ></Route>
          <Route exact path = "" ></Route>
          <Route exact path = "" ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
