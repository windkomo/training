import React, { Component, PropTypes } from 'react'
import { Input, Button } from 'react-bootstrap'

class ExpenseForm extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            title: this.props.title || ''
        }
    }

    handleSubmit (e) {
        e.preventDefault()
        const title = this.state.title.trim()

        this.props.onSave(title)
        this.setState({
            title: ''
        })
    }

    handleChange (e) {
        this.setState({
            title: e.target.value
        })
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <Input
                        type="text"
                        groupClassName="group-class"
                        label="Expense label"
                        labelClassName="label-class"
                        placeholder={this.props.placeholder}
                        autoFocus="true"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.title}
                    />
                    <Button
                        type="submit"
                        bsStyle="primary"
                    >
                        Add
                    </Button>
                </form>
            </div>
        )
    }
}

ExpenseForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    title: PropTypes.string,
    placeholder: PropTypes.string,
}

export default ExpenseForm
