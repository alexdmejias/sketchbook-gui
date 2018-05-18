import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Sidebar from './Sidebar';
import Sketch from './Sketch';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
        console.log('alexalex - ----------', this.props);
    }

    componentWillMount() {
        fetch('/wasd.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    projects: json.projects
                })
            })
    }

    render() {
        console.log('alexalex - ++++++++++', this.props)
        return (
        <div className="App">
            <Sidebar projects={this.state.projects}/>
            <Sketch />
        </div>
        );
    }
}

export default App;
