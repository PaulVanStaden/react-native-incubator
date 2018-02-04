import React, { Component } from 'react';

class reactBasics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleAddition = this.handleAddition.bind(this);
    }

    render() {
        return (
            <div>
                <h1>{'Lets investigate setState()'}</h1>
                <h1>{`${this.state.count}`}</h1>
                <button onClick={this.handleAddition}>{'Add 100 & 5'}</button>
            </div>
        );
    }

    handleAddition() {
        this.setState({ count: this.state.count + 5 });
        this.setState({ count: this.state.count + 100 });
    }
}

export default reactBasics;
