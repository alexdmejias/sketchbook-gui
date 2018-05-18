import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "./Sidebar.css";

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        
        this._toggleSideBar = this._toggleSideBar.bind(this);
    }
    
    _toggleSideBar() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    _renderProject (project) {
        return <li key={project.slug}><Link to={project.slug}>{project.title}</Link></li>
    }
    
    render () {
        return (
            <div className={`sidebar ${this.state.isOpen ? 'open': ''}`} onClick={this._toggleSideBar} >
                <h1>sidebar</h1>
                <div className="projects">
                    <ul>
                        {(this.props.projects || []).map(project => this._renderProject(project))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;
