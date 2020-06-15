import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { addPost } from '../actions/PostActions';

class Home extends Component {
  
  state = {
    title: '',
    body: ''
  }
  handleClick = (e) => {
    e.preventDefault()
    this.props.addPost(this.state);
    this.setState({
      title : '',
      body: ''
    })
  }
  handleChange= (e) =>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  render(){
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
                <Link to={'/' + post.id}>
                    <span className="card-title red-text">{post.title}</span>
                </Link>
                <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container">
          <h4 className="center">Home</h4>
          <div>
          {/*  <form onSubmit={this.handleClick} className="container"> 
              <label htmlFor="title"  >Title:</label>
              <input type="text" id="title" onChange={this.handleChange} value={this.state.title} />
              <label htmlFor="body" >Body:</label>
              <input type="text" id="body" onChange={this.handleChange} value={this.state.body} />
              <button>Add Post</button>
            </form>*/}
          </div>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (state) => dispatch(addPost(state))
    //OR
    //deletePost: (id) => {dispatch({type: 'DELETE_POST, id: id'})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)