import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/ProjectActions';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="cyan-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <button className="btn cyan lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapPropsToState = (dispatch) =>{
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapPropsToState)(CreateProject);