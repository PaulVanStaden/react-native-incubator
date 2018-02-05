import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import reactBasics from './react-basics/react-basics-view';
import BooksView from './redux/books/books-view';
import BooksList from './react-basics/book-list/books-list';

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/basics">Basics</Link>
                </li>
                <li>
                    <Link to="/basics/book-list">Standard Books List</Link>
                </li>
                <li>
                    <Link to="/redux/book-list">Redux Books List</Link>
                </li>
            </ul>

            <hr />
            {/* Routes */}
            <Route exact path="/basics" component={reactBasics} />
            <Route path="/basics/book-list" component={BooksList} />
            <Route path="/redux/book-list" component={BooksView} />
        </div>
    </Router>
);

export default BasicExample;
