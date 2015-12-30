import React, { Component, PropTypes } from 'react'
import { Input } from 'react-bootstrap'

class ExpenseForm extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            title: this.props.title || ''
        }
    }

    handleSubmit (e) {
        const title = e.target.value.trim()
        if (e.which === 13) {
            this.props.onSave(title)
            this.setState({
                title: ''
            })
        }
    }

    handleChange (e) {
        this.setState({
            title: e.target.value
        })
    }

    render () {
        return (
            <Input
                type="text"
                groupClassName="group-class"
                label="Expense label"
                labelClassName="label-class"
                placeholder={this.props.placeholder}
                autoFocus="true"
                onChange={this.handleChange.bind(this)}
                onKeyDown={this.handleSubmit.bind(this)}
                value={this.state.title}
            />
        )
    }
}

ExpenseForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    title: PropTypes.string,
    placeholder: PropTypes.string,
}

export default ExpenseForm
