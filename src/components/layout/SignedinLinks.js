import React from 'react'
import { Link } from 'react-router-dom'

 function SignedinLinks() {
    return (
        
            <ul className="right ul-list">
            <li><Link to='/CreateProject'>New project</Link></li>
            <li><Link to=''>Logout</Link></li>
            <li><Link to='' className="btn btn-floating pink lighten-1">MAD</Link> </li>
            </ul>

        
    )
}
export default SignedinLinks