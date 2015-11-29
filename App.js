import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'state txt'
        }
    }
    update(e) {
        this.setState({ txt: e.target.value })
    }
    render() {
        let txt = this.props.txt
        return (
            <div>
                <input type="text"
                    onChange={this.update.bind(this)} />
                <h2>{this.state.txt}</h2>
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
