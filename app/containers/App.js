import React, { Component, PropTypes } from 'react'

import Header from '../components/layout/Header'
import Sidemenu from '../components/layout/Sidemenu'

import ExpenseList from '../components/expense/ExpenseList'
import ExpenseHeader from '../components/expense/ExpenseHeader'

class App extends Component {
    render() {
        const { expenses, actions, addExpense } = this.props
        return (
            <div>
                <Header />
                <Sidemenu />
                <div className="content-wrapper">
                    <ExpenseHeader addExpense={addExpense} />
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
    actions: PropTypes.object.isRequired
}

export default App
