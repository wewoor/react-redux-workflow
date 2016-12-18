import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="root">
                {this.props.children || "Welcome React App."}
            </div>
        )
    }
}

export default App;
