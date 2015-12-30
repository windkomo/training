import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ExpenseList from '../components/expense/ExpenseList'
import Header from '../components/expense/Header'
import * as ExpenseActions from '../actions/expenses'

class App extends Component {
    render() {
        const { expenses, actions } = this.props
        return (
            <div>
                <Header addExpense={actions.addExpense} />
                <ExpenseList
                    actions={actions}
                    expenses={expenses}
                />
            </div>
        )
    }
}

App.propsTypes = {
    expenses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
    return {
        expenses: state.expenses
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(ExpenseActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
