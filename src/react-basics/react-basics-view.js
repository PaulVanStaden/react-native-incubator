import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class reactBasics extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Link to="/basics/async">Async</Link>
            </div>
        );
    }
}

export default reactBasics;
