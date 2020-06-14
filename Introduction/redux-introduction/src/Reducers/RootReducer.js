const initState = {
    posts: [
      {id: '1', title: 'Props', body: 'React Props are like function arguments in JavaScript and attributes in HTML. To send props into a component, use the same syntax as HTML attributes. The component receives the argument as a props object. Props are also how you pass data from one component to another, as parameters.'},
      {id: '2', title: 'Routing', body: 'React Router is a collection of navigational components that compose declaratively with your application. React router is a routing library built on top of the react which is used to create the routing in react apps. In single page apps, there is only single html page.we are reusing the same html page to render the different components based on the navigation. But in multipage apps, you will get an entirely new page from the server when you navigate. “If you stuck anywhere in the middle please refer to code repository”'},
      {id: '3', title: 'Redux', body: 'Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger. You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.'}
    ]
  }
  
  const RootReducer = (state = initState, action) => {
    
    if(action.type === 'DELETE_POST')
    {
      console.log(action);
      let newPosts = state.posts.filter(post => {
        return post.id !== action.id
      });
      return {
        posts: newPosts
      }
     }
    return state;
  }
  
  export default RootReducer