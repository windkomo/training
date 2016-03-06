import React, { Component, PropTypes } from 'react'

import Header from '../components/layout/Header'
import Sidemenu from '../components/layout/Sidemenu'

import ExpenseList from '../components/expense/ExpenseList'
import ExpenseFormContainer from '../components/expense/ExpenseFormContainer'

class App extends Component {
    render() {
        const { actions, expenses, expenseForm } = this.props
        return (
            <div>
                <Header />
                <Sidemenu />
                <div className="content-wrapper">
                    <ExpenseFormContainer
                        expenseForm={expenseForm}
                        toggle={actions.toggleExpenseForm}
                        addExpense={actions.addExpense}
                    />
                    <ExpenseList
                        actions={actions}
                        expenses={expenses}
                    />
                </div>
            </div>
        )
    }
}

App.propsTypes = {
    expenses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    addExpense: PropTypes.func.isRequired
}

export default App
