import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import App from './App'
import * as ExpenseActions from '../actions/expenses'

class AppContainer extends Component {
    render() {
        const { expenses, actions } = this.props
        return (
            <App
                addExpense={actions.addExpense}
                actions={actions}
                expenses={expenses}
            />
        )
    }
}

AppContainer.propsTypes = {
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
)(AppContainer)
