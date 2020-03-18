import React from 'react'
import { Link } from 'react-router-dom'

 function SignedoutLinks() {
    return (
        <ul className="right ul-list">
            <li><Link to='/Signup'>Signup</Link></li>
            <li><Link to='/Signin'>Login</Link></li>
            
            </ul>

    )
}
export default SignedoutLinks;