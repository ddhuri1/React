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
