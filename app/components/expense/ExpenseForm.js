import React from 'react';
import { Input } from 'react-bootstrap';

class ExpenseForm extends React.Component {
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
                type="text"
                value={this.state.value}
                placeholder="Walmart food"
                label="Expense label"
                ref="input"
                groupClassName="group-class"
                labelClassName="label-class"
                onChange={this.handleChange} />
        );
    }
}

export default ExpenseForm;
