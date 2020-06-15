import React from 'react'
import { Link } from 'react-router-dom'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper cyan darken-4">
            <div className="container">
                <Link to='/' className="brand-logo"> ProjectPlanner </Link>
                <SignedIn />
                <SignedOut />
            </div>
        </nav>
    )
}

export default Navbar
