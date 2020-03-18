import React, { Component } from 'react'
import ProjectList from '../project/ProjectList'

export class dashboard extends Component {
    render() {
    
            return (
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <ProjectList />
                        </div>
                        <div className="col s12 m6">
        
                        </div>
                    </div>
        
                </div>
            
        )
    }
}

export default dashboard
