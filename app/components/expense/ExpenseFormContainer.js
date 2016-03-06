import React, { PropTypes, Component } from 'react'

import ExpenseForm from './ExpenseForm'
import Toggler from '../buttons/Toggler'

class ExpenseFormContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showForm: false
        }
    }

    handleSave(title) {
        if (title.length !== 0) {
            this.props.addExpense(title)
        }
    }

    toggle() {
        this.props.toggle()
    }

    render() {
        const form = this.props.expenseForm.visible ?
                    <ExpenseForm
                        onSave={this.handleSave.bind(this)}
                        placeholder="What did you spend money on ?"
                    /> :
                    null

        return (
            <div>
                <Toggler
                    labelOff="Add an expense"
                    labelOn="Cancel"
                    onToggle={this.toggle.bind(this)}
                    toggled={this.props.expenseForm.visible}
                    buttonClassesOff="btn btn-success"
                    buttonClassesOn="btn btn-danger"
                    iconClassesOff="fa fa-plus fa-lg"
                    iconClassesOn=""
                />
                { form }
            </div>
        )
    }
}

ExpenseFormContainer.propTypes = {
    addExpense: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    expenseForm: PropTypes.object.isRequired
}

export default ExpenseFormContainer
