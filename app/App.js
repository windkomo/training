import React from 'react';
import ExpenseList from './components/expense/ExpenseList';

class App extends React.Component {
    render() {
        return (
            <ExpenseList />
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

export default App
