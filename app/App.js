import React from 'react';
import ExpenseList from './components/expense/ExpenseList';
import ExpenseForm from './components/expense/ExpenseForm';

class App extends React.Component {
    render() {
        return (
            <div>
                <ExpenseList />
                <ExpenseForm />
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

export default App
