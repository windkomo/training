import React, { PropTypes, Component } from 'react'
import ExpenseForm from './ExpenseForm'

class ExpenseHeader extends Component {
    handleSave(title) {
        if (title.length !== 0) {
            this.props.addExpense(title)
        }
    }

    render() {
        return (
            <div>
                <ExpenseForm
                    onSave={this.handleSave.bind(this)}
                    placeholder="What did you spend money on ?"
                />
            </div>
        )
    }
}

ExpenseHeader.propTypes = {
    addExpense: PropTypes.func.isRequired
}

export default ExpenseHeader
