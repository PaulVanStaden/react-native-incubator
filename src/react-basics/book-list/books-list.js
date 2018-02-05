import React, { Component } from 'react';

class BooksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                { title: 'PHP IS THE BEST!', blurb: 'some text 1' },
                { title: 'JAVASCRIPT IS THE BEST!!', blurb: 'some text 2' },
                { title: 'C# MAYBE', blurb: 'some text 3' },
                { title: 'NODEJS BOOOOOI', blurb: 'some text 4' }
            ],
            selectedBook: null
        };
        this.renderBookList = this.renderBookList.bind(this);
        this.renderSelectedBook = this.renderSelectedBook.bind(this);
    }

    render() {
        return (
            <div>
                <h1>{"I'm basic!"}</h1>
                <hr />
                <ul className={'list-group col-sm-4'}>{this.renderBookList()}</ul>
                <ul className={'list-group col-sm-4'}>{this.renderSelectedBook()}</ul>
            </div>
        );
    }

    renderBookList() {
        return this.state.books.map((book, index) => {
            return (
                <li
                    className={'list-group-item'}
                    key={index}
                    onClick={() => this.setSelectedBook(book)}
                >
                    {book.title}
                </li>
            );
        });
    }

    renderSelectedBook() {
        if (!this.state.selectedBook) {
            return null;
        }

        return (
            <li className={'list-group-item'}>
                {this.state.selectedBook.title} <br />
                {this.state.selectedBook.blurb}
            </li>
        );
    }

    setSelectedBook(selectedBook) {
        this.setState({ selectedBook });
    }
}

export default BooksList;
