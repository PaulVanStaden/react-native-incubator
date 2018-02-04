import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import reactBasics from './react-basics/react-basics-view';

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/basics">Basics</Link>
                </li>
            </ul>

            <hr />
            {/* Routes */}
            <Route exact path="/basics" component={reactBasics} />
        </div>
    </Router>
);

export default BasicExample;
