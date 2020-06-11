# "React Introduction"

This is an introduction to React that takes you from what React is, to understanding its components and finally creating an application 

1. index.html

   This file is the basic react app page that shows you how to make a basic html page with react features.

   - React CDN 
   https://reactjs.org/docs/cdn-links.html: 
   You need to grab the cross origin script from here for react and react-dom.
   - Components:
   You will be looking at Components and how we can create & use them to take control of a part of a website.
   - State:
   We'll take a look at what state is, and create a state to keep track of data for our component.
   - DOM Events:
   You will see how to listen to DOM events - click, mouseover, copy, etc - and react to them by creating event handler functions in our component.
   Full list of events - https://reactjs.org/docs/events.html/
   - Form:
   Introduction of forms in React and how to capture user data and store it on the component state.

2. props-introduction:

   This folder will introduce to props and how to use Functional components with Class Components

   - SPA:
   Generate Single Page Apps using the following:
     - [x] npx create-react-app <name>
	 - [x] cd <name>          // Move to the new react folder
	 - [x] npm start          //This starts the server
   - Nested Components:
   We will see exactly how we can create multiple components and nest them within other components.
   - Props:
   What props are and how we can use them to pass data from one component (the parent) to another, nested, component (the child).
   - Lists:
   The concept of cycling through lists of data and outputting that data in the component template. To do this, we'll use the map function.
   - Add/Delete:
   How we can add data to existing state and also delete data from the state.
   - CSS:
   Use and import CSS files into your components. For more info on CSS modules, see the link below.
   More info on CSS modules - https://blog.pusher.com/css-modules-react/