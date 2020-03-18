import React from 'react'
import { Link } from 'react-router-dom'
import SignedinLinks from './SignedinLinks'
import SignedoutLinks from './SIgnedoutLinks'

function Navbar() {
    return (

        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/">BLOAP</Link>
                <SignedinLinks />
                <SignedoutLinks />
            </div>
        </nav>

    )
}
export default Navbar;