# "React Introduction"

This is an introduction to React that takes you from what React is, to understanding its components and finally creating an application 

1. **index.html**

   This file is the basic react app page that shows you how to make a basic html page with react features.

   - ***React CDN:*** <br />
   https://reactjs.org/docs/cdn-links.html. You need to grab the cross origin script from here for react and react-dom.
   - ***Components:***<br />
   You will be looking at Components and how we can create & use them to take control of a part of a website.
   - ***State:***<br />
   We'll take a look at what state is, and create a state to keep track of data for our component.
   - ***DOM Events:***<br />
   You will see how to listen to DOM events - click, mouseover, copy, etc - and react to them by creating event handler functions in our component.
   Full list of events - https://reactjs.org/docs/events.html/
   - ***Form:***<br />
   Introduction of forms in React and how to capture user data and store it on the component state.

2. **props-introduction:**

   This folder will introduce to props and how to use Functional components with Class Components

   - ***SPA:***<br />
   Generate Single Page Apps using the following:
     - [x] npx create-react-app <name>
	  - [x] cd <name>          // Move to the new react folder
	  - [x] npm start          //This starts the server
   - ***Nested Components:***<br />
   We will see exactly how we can create multiple components and nest them within other components.
   - ***Props:***<br />
   What props are and how we can use them to pass data from one component (the parent) to another, nested, component (the child).
   - ***Lists:***<br />
   The concept of cycling through lists of data and outputting that data in the component template. To do this, we'll use the map function.
   - ***Add/Delete:***<br />
   How we can add data to existing state and also delete data from the state.
   - ***CSS:***<br />
   Use and import CSS files into your components. For more info on CSS modules, see the link below.
   More info on CSS modules - https://blog.pusher.com/css-modules-react/

3. **next-do:**

   This is a project to help you manage your ToDos, add new todos, delete completed ones and also mark those that are needed later on and have certian imprortance. <br />
   We will do through the following:<br />
   - [x] Create a SPA using steps mentioned in the introdction
   - [x] Create a ToDo list 
   - [x] Add new todos
   - [x] Delete todos
   - [x] Mark them

   The running applicaton can be viewed on devinadhuri.com/ <br />
   For materializecss: Add this link to index.html <br />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

4. **routes-introduction:**
 
   React Router is a collection of navigational components that compose declaratively with your application. 
   - ***React Router:***<br />
   Generate Single Page Apps. To install it cd into the directory of the newly made project and type: ```npm install react-router-dom```. With this you can write an application that will run in the browser. <br />
   In the App.js, import {BrowserRouter, Router, Route, Switch} (what you need) from the dom package.
   Then you can add the routes in <Route> and use exact-path instead of path,to match / exactly to home. <br /> eg:<Route exact path = "/" component={Home}/> <br />
   To avoid the page to reload/refresh at every call, use {Link, NavLink} from the dom package. So instead of using <a>, use <Link to = "">, this way behind the scene it calls a preventDefault (reload) on it. <br />
   NavLink works the same as Link but only that a active class is linked to the nav link and is useful to addd styles to active links. <br />
   - ***Higher order Components:*** <br />
   eg: withRouter(<className>): withRouter is a higher order component that superchrges the classname class. So it takes the class as a wrapped component addes some new features and passes it out as a supercharged component. (youtube.com/watch?v=hKvV0euP3mY&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=28) <br />
   We can also have put own HOC.

   - ***HTTP RESTful Library "AXIOS":***<br />
   This will fire a REST API to fetch some data from a end point. Use Axios for this. ```npm install axios```. It is a Javascript library used to make http requests from node.js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. Axios is a tool in the Javascript Utilities & Libraries category of a tech stack. <br />
   Alternatives to Axios are: redux-saga, graphQL, jQuery, Modernizr, fancyBox, Lodash, Moment.js. <br />
   Use the get/fetch method in componentDidMount(). Use the <Switch> to only load up 1 component at a time.

5. **redux-introduction:**

   This project has the same code structure as routes-introduction, just that instead on Axios we will use Redux store.
   Redux is really a fairly simple design pattern. Redux is a predictable state container for JavaScript apps. Install both redux and react redux: ```npm install redux react-redux```. <br /> 
   More information: https://redux.js.org/introduction/getting-started. <br />

   ![Redux process](https://www.esri.com/arcgis-blog/wp-content/uploads/2017/09/react-redux-overview.png)
   The component doesn't make changes to the store, it calls the dispatcher on the action that inturn calls the reducer and the Reducer makes changes to the store. <br />
    
   ```
   import {Provider} from 'react-redux';  //in INDEX.js: 
   import { createStore } from 'redux';   //createStore is a function from Redux
   RectDOM.render(<Provider> store={store} <App /></Provider>) //Provider interacts with the App.js
   function reducer(state = 0, action) {  // initially reducer needs some state and since it cannot find one it usesthe initial state (= 0)
      if(action.type == <>)
      return { ...state, <tochange> }     //try not chnaging the actual state but rather creating a new one and copying it over. Also need to take the previous states that wone be chnaged else this will overwrite original state
   } 
   let store = createStore(reducer)       //This is a reducer, a pure function with (state, action) => state signature. It describes how an action transforms the state into the next state.
   store.subscribe(() => {..})            //Everytime state updated subscribe is fired.
   const action = {type: '...', <payload>}//Action is a JS object and it has a type property that describes the action and has a Payload.
   store.dispatch(<action to dispatch>)   //dispatch the action 
   ```
   In this the reducer runs 2 times, one when crateStore is called where it is initialized with a state and second when the dispatch is called where it sets an action to the state.

   to redirect from a page, call ```this.post.history("/");```
    
6. **Project-Manager:**

   This is a project where you can add your projects and descriptions. It is linked with firebase: ![React-Redux-Firebase](https://github.com/ddhuri1/React/blob/master/React-Redux-Firebase.png) and supports signin functionality.

   - ***Setting Up:***<br />
      - [x] npx create-react-app <name>
      - [x] npm install react-router-dom
      - [x] npm install redux react-redux
	   - [x] cd <name>          
	   - [x] npm start          
      
   - ***Navbar Routing:***<br />
      - [x] scripts: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" | https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" | "https://fonts.googleapis.com/icon?family=Material+Icons"
      - [x] Navbar Component
      - [x] Dashboard Component
      - [x] Routes to home page and projects
      - [x] Project summary and detail

   - ***Auth part 1:***<br />
      - [x] Sign In Component
      - [x] Sign Up Component
      - [x] NavLinks 

   - ***Redux:***<br />
      - [x] Set up the store in index.js
      - [x] Create various reducers required (state, action)
      - [x] Using combineReducers from redux we combine them into the root reducer that is passed to createStore()
      - [x] Creating and Accessing data to and from the redux store
      - [x] npm install redux-thunk:
            - [x] Halt dispatch
            - [x] Perform async request
            - [x] Resume dispatch to reducer

   - ***Firebase:***<br />
      - [x] Create a firebase account and register the app
      - [x]
      - [x]

   - ***:***<br />

   - ***:***<br />

   - ***:***<br />






