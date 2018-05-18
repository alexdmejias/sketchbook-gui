import React, {Component} from 'react';
import { withRouter } from 'react-router'

import "./Sketch.css";

class Sketch extends Component {
    render () {
        return (
            <div className="sketch">
                <iframe src={this.props.location} frameBorder="0"></iframe>
            </div>
        )
    }
}

export default withRouter(Sketch);
