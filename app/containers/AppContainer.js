import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import App from './App'
import * as ExpenseActions from '../actions/expenses'

class AppContainer extends Component {
    render() {
        const { expenses, expenseForm, actions } = this.props
        return (
            <App
                actions={actions}
                expenses={expenses}
                expenseForm={expenseForm}
            />
        )
    }
}

AppContainer.propsTypes = {
    expenses: PropTypes.array.isRequired,
    expenseForm: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
    return {
        expenses: state.expenses.expenses,
        expenseForm: state.expenseForm
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
)(AppContainer)
