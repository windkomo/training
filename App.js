import React from 'react';

var data = [
  {id: 1, author: 'Pete Hunt', text: 'aThis is one comment'},
  {id: 2, author: 'Jordan Walke', text: 'This is *another* comment'}
];

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'Hello sar'
        }
    }
    update(e) {
        this.setState({ txt: e.target.value })
    }
    render() {
        return (
            <div>
                <input type='text'
                    onChange={this.update.bind(this)} />
                <h2>{this.state.txt}</h2>
                <h2>Ehell</h2>
                <h2>bleuargh</h2>
            </div>
        );
    }
}

App.propsTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: 'hey man default'
}

// const App = () => <h1>Hello boy</h1>

export default App
