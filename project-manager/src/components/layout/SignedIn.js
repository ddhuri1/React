import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/AuthActions'

const SignedIn = (props) => {
  console.log(props.profile.initials)
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/create'>New Project</NavLink></li> 
                <li><a onClick={props.signOut}>Log Out</a></li>
                <li>
                  <NavLink to='/' className="btn btn-floating cyan darken-2">
                    {props.profile.initials}
                  </NavLink>
                </li>
            </ul>
        </div>
      )
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
  
  export default connect(null, mapDispatchToProps)(SignedIn)