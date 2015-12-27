import React from 'react';
import { Input } from 'react-bootstrap';

class ExpenseForm extends React.Component {
    displayName: 'ExpenseForm'
    constructor () {
        super();
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange () {
        this.setState({
            value: this.refs.input.getValue()
        });
    }
    render () {
        return (
            <Input
                groupClassName="group-class"
                label="Expense label"
                labelClassName="label-class"
                onChange={this.handleChange}
                placeholder="Walmart food"
                ref="input"
                type="text"
                value={this.state.value}
            />
        );
    }
}

export default ExpenseForm;
