import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/layout/Header'
import Sidemenu from '../components/layout/Sidemenu'

import ExpenseList from '../components/expense/ExpenseList'
import ExpenseHeader from '../components/expense/ExpenseHeader'
import * as ExpenseActions from '../actions/expenses'

class App extends Component {
    render() {
        const { expenses, actions } = this.props
        return (
            <div>
                <Header />
                <Sidemenu />
                <div className="content-wrapper">
                    <ExpenseHeader addExpense={actions.addExpense} />
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
