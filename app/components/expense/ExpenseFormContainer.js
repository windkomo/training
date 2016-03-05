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
        this.setState({
            showForm: !this.state.showForm
        })
    }

    render() {
        const form = this.state.showForm ?
                    <ExpenseForm
                        onSave={this.handleSave.bind(this)}
                        placeholder="What did you spend money on ?"
                    /> :
                    null

        return (
            <div>
                <Toggler
                    label="Add an expense"
                    onToggle={this.toggle.bind(this)}
                    buttonClasses="btn btn-success"
                    iconClasses="fa fa-plus fa-lg"
                />
                { form }
            </div>
        )
    }
}

ExpenseFormContainer.propTypes = {
    addExpense: PropTypes.func.isRequired
}

export default ExpenseFormContainer
