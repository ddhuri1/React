import React, { Component } from 'react'

class Signup extends Component {
  state = {
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="cyan-text text-darken-3">Hello New User!! <br />Please Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id='firstname' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id='lastname' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn cyan lighten-1 z-depth-0">SIGN UP</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup