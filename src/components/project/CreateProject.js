import React, { Component } from "react"

export class CreateProject extends Component {

    state = {
        Title: '',
        Content: '',
        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        
    };

    render() {
        return (

            <div className='container'>
                <form className="white">
                    <h5 className="grey-text text-darken-3">Create a new Project</h5>
                    <div className="input-field">
                        <label htmlFor="project">Project Title</label>
                        <input type="text" id="Title"  onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">


                        <label htmlFor="project">Content</label>
                        <input type="text" id="Content"  onChange={this.handleChange}/>
                    </div>
                   

                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Create</button>
                        </div>
                    </form>
            </div>

                )
            }
        
        }

export default CreateProject;