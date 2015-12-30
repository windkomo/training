import React, { PropTypes, Component } from 'react'
import ExpenseForm from './ExpenseForm'

class Header extends Component {
    handleSave(title) {
        if (title.length !== 0) {
            this.props.addExpense(title)
        }
    }

    render() {
        return (
            <header className="header">
                <ExpenseForm
                    onSave={this.handleSave.bind(this)}
                    placeholder="What did you spend money on ?"
                />
            </header>
        )
    }
}

Header.propTypes = {
    addExpense: PropTypes.func.isRequired
}

export default Header
